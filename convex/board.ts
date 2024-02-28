import { BOARDS_IMAGES } from "@/lib/constants";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAllOrThrow } from "convex-helpers/server/relationships"



// Create a new task with the given text
export const createBoard = mutation({
    args: {
        title: v.string(),
        orgId: v.string(),
        description: v.string(),
        imageUrl: v.optional(v.string()),
    },

    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            throw new Error("You are not authorized!");
        }
        const imageUrl = args.imageUrl ?? BOARDS_IMAGES[Math.round(Math.random() * BOARDS_IMAGES.length)]
        const newBoardId = await ctx.db.insert("boards", {
            ...args,
            imageUrl,
            authorId: user.subject,
            authorName: user.name!
        });

        return newBoardId;
    },
});

export const getBoards = query({
    args: {
        id: v.string(),
        search: v.optional(v.string()),
        favorites: v.optional(v.boolean())
    },
    handler: async (ctx, args) => {

        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            throw new Error("You are not authorized!");
        }
        const favorites = args.favorites
        if (favorites) {

            const favoritesBoard = await ctx.db.query("favoriteBoards").withIndex("by_user_org", q =>
                q.eq("userId", user.subject).eq("orgId", args.id)
            ).order("desc").collect()


            const ids = favoritesBoard.map(b => b.boardId)

            const boards = await getAllOrThrow(ctx.db, ids)

            return boards.map(b => ({
                ...b,
                isFavorite: true
            }))

        }

        const search = args.search?.trim()
        let boards;
        if (search) {
            boards = await ctx.db.query("boards").withSearchIndex("search_title", q =>
                q.search("title", search).eq("orgId", args.id)).collect()
        }
        else {
            boards = await ctx.db
                .query("boards").withIndex("bg_org", q => q.eq("orgId", args.id))
                .order("desc").collect()

        }



        const boardsWithFavorites = boards.map(async board => {
            const isFavoite = await ctx.db.query("favoriteBoards").withIndex("by_user_board", q =>
                q.eq("userId", user.subject).eq("boardId", board._id)
            ).unique()
            return {
                ...board,
                isFavorite: !!isFavoite
            }

        })

        const boardsWithFavoritesResult = await Promise.all(boardsWithFavorites)


        return boardsWithFavoritesResult;
    },
});


export const getBoardById = query({
    args: {
        id: v.id("boards")
    },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        const board = await ctx.db.get(args.id)

        if (!board) throw new Error("Board not found")


        const boardWithFavoite = await ctx.db.query("favoriteBoards").withIndex("by_user_board", q =>
            q.eq("userId", user?.subject!).eq("boardId", board?._id)).unique()

        return {
            ...board,
            isFavorite: !!boardWithFavoite
        }

    }
})




export const deleteBoard = mutation({

    args: {
        id: v.id("boards"),
    },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            throw new Error("You are not authorized!");
        }
        const board = await ctx.db.get(args.id)
        if (!board) throw new Error("Board not found")
        const userId = user.subject


        const existingFavorite = await ctx.db.query("favoriteBoards").
            withIndex("by_user_board", q =>
                q.eq("userId", userId).
                    eq("boardId", board._id)
            )
            .unique()

        if (existingFavorite) {
            await ctx.db.delete(existingFavorite._id)
        }
        await ctx.db.delete(args.id)

    },
});



export const updateBoard = mutation({
    args: {
        id: v.id("boards"),

        title: v.optional(v.string()),
        description: v.optional(v.string()),
        imageUrl: v.optional(v.string())
    },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            throw new Error("You are not authorized!");
        }
        const { id } = args;
        const exists = await ctx.db.get(id);
        if (!exists) throw new Error("There is no board with id: " + id)

        const imageUrl = args.imageUrl?.trim()
        const title = args.title?.trim()
        const description = args.description?.trim()
        if (imageUrl)
            await ctx.db.patch(id, {
                imageUrl,
            })

        if (title)
            await ctx.db.patch(id, {
                title,
            })

        if (description)
            await ctx.db.patch(id, {
                description,
            })


    },
});
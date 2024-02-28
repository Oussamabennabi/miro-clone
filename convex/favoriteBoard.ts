import { mutation, query } from "./_generated/server";
import { v } from "convex/values";



// export const getBoards = query({
//     args: {
//         id: v.string()
//     },
//     handler: async (ctx, args) => {
//         const user = await ctx.auth.getUserIdentity()
//         if (!user) {
//             throw new Error("You are not authorized!");
//         }
//         const boards = await ctx.db
//             .query("boards").withIndex("bg_org", q => q.eq("orgId", args.id))
//             .order("desc").collect()
//         return boards;
//     },
// });



export const favorite = mutation({
    args: {
        boardId: v.id("boards"),
        orgId: v.string()
    },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            throw new Error("You are not authorized!");
        }

        const board = await ctx.db.get(args.boardId)
        if (!board) {
            throw new Error("The board where not found!")
        }

        const userId = user.subject
        const existingFavorite = await ctx.db.query("favoriteBoards").
            withIndex("by_user_board", q =>
                q.eq("userId", userId).
                    eq("boardId", args.boardId)).unique()

        if (existingFavorite) {
            throw new Error("This board is already favorite")
        }

        await ctx.db.insert("favoriteBoards", {
            boardId: args.boardId,
            orgId: args.orgId,
            userId
        })


    },
});

export const unfavorite = mutation({
    args: {
        boardId: v.id("boards"),
        orgId: v.string()
    },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            throw new Error("You are not authorized!");
        }

        const board = await ctx.db.get(args.boardId)
        if (!board) {
            throw new Error("The board where not found!")
        }

        const userId = user.subject
        const existingFavorite = await ctx.db.query("favoriteBoards").
            withIndex("by_user_board", q =>
                q.eq("userId", userId).
                    eq("boardId", args.boardId)).unique()

        if (!existingFavorite) {
            throw new Error("favorite board is not found")
        }

        await ctx.db.delete(existingFavorite._id)

    },
});
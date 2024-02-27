import { BOARDS_IMAGES } from "@/lib/constants";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";




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
        console.log("ImsgeIts? ",imageUrl)
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
    handler: async (ctx) => {
        const boards = await ctx.db
            .query("boards")
            .order("desc").collect()
        return boards;
    },
});



export const deleteBoard = mutation({
    args: {
        id: v.id("boards"),
    },
    handler: async (ctx, args) => {
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
        const { id } = args;
        const exists = await ctx.db.get(id);
        if (!exists) throw new Error("There is no board with id: " + id)

        if (args.imageUrl)
            await ctx.db.patch(id, {
                imageUrl: args.imageUrl,
            })

        if (args.title)
            await ctx.db.patch(id, {
                title: args.title,
            })

        if (args.description)
            await ctx.db.patch(id, {
                description: args.description,
            })


    },
});
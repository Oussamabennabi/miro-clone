import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const images = [
    "/placeholders/1.svg",
    "/placeholders/2.svg",
    "/placeholders/3.svg",
    "/placeholders/4.svg",
    "/placeholders/5.svg",
    "/placeholders/6.svg",
    "/placeholders/7.svg",
    "/placeholders/8.svg",
    "/placeholders/9.svg",
    "/placeholders/10.svg",
]

// Create a new task with the given text
export const createBoard = mutation({
    args: {
        title: v.string(),
        orgId: v.string(),
        description: v.string(),
    },

    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity()
        if (!user) {
            throw new Error("You are not authorized!");
        }
        const imageUrl = images[Math.round(Math.random() * images.length)]
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
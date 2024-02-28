import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    orgId: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    authorId: v.string(),
    authorName: v.string(),
  }).index("bg_org", ["orgId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["orgId"],
      
    }),
  favoriteBoards: defineTable({
    orgId: v.string(),
    userId: v.string(),
    boardId: v.id("boards"),
  }).index("by_orgId", ["orgId"])
    .index("by_user_org", ["userId", "orgId"])
    .index("by_user_board", ["userId", "boardId"])
    .index("by_user_board_org", ["userId", "boardId","orgId"])
});
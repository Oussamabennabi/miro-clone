import React from "react";
import Info from "./info";
import ToolBar from "./tool-bar";
import { Id } from "@/convex/_generated/dataModel";
interface CanvasProps {
  boardId: Id<"boards">;
}
const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <div className="h-full bg-purple-100 relative w-full max-h-screen max-w-[100vw]">
      <Info boardId={boardId} />
      <ToolBar />
    </div>
  );
};

export default Canvas;

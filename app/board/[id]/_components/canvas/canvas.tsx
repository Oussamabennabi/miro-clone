import React, { useState } from "react";
import Info from "./info";
import ToolBar from "./toolbar";
import { Id } from "@/convex/_generated/dataModel";
import Users from "./users";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { useCanRedo, useCanUndo, useHistory } from "@/liveblocks.config";
interface CanvasProps {
  boardId: Id<"boards">;
}
const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();
  const history = useHistory();

  return (
    <div className="h-full bg-purple-100 relative w-full max-h-screen max-w-[100vw]">
      <Info boardId={boardId} />
      <ToolBar
        canvasState={canvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
        setCanvasState={setCanvasState}
      />
      <Users />
    </div>
  );
};

export default Canvas;

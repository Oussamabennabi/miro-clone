"use client";
import React from "react";
import ToolbarItem from "./toolbar-item";
import {
  Circle,
  MousePointer2,
  Pen,
  Redo,
  Square,
  StickyNote,
  Type,
  Undo,
} from "lucide-react";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
interface ToolBarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  canRedo: boolean;
  canUndo: boolean;
  undo: () => void;
  redo: () => void;
}
const ToolBar = ({
  canvasState,
  setCanvasState,
  canRedo,
  canUndo,
  redo,
  undo,
}: ToolBarProps) => {
  return (
    <div className="absolute flex gap-3 max-w-12   flex-col  top-1/2 -translate-y-1/2 left-2 ">
      <div className="shadow-md bg-white flex flex-col gap-1 items-center p-1.5 justify-center rounded-md">
        <ToolbarItem
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
          icon={MousePointer2}
          label="Cursor"
        />

        <ToolbarItem
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          icon={Type}
          label="Type"
        />
        <ToolbarItem
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
          icon={StickyNote}
          label="Sticky Note"
        />
        <ToolbarItem
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
          icon={Square}
          label="Rectangle"
        />
        <ToolbarItem
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            })
          }
          icon={Circle}
          label="Circle"
        />
        <ToolbarItem
          isActive={canvasState.mode === CanvasMode.Pencil}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
          icon={Pen}
          label="Pen"
        />
      </div>
      <div className="shadow-md bg-white flex flex-col gap-1 items-center p-1.5 justify-center rounded-md">
        <ToolbarItem
          icon={Undo}
          onClick={undo}
          isDisabled={!canUndo}
          label="Undo"
        />
        <ToolbarItem
          icon={Redo}
          onClick={redo}
          isDisabled={!canRedo}
          label="Redo"
        />
      </div>
    </div>
  );
};

export default ToolBar;

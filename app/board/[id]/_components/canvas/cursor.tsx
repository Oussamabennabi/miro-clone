"use client";

import { getRandomColorFromCnId } from "@/lib/utils";
import { useOther } from "@/liveblocks.config";
import { MousePointer2 } from "lucide-react";
import { memo } from "react";

interface CursorProps {
  id: number;
}
const Cursor = memo(({ id }: CursorProps) => {
  const color = getRandomColorFromCnId(id);
  const info = useOther(id, (u) => u.info);
  const cursor = useOther(id, (u) => u.presence.cursor);
  const name = info?.name || "Teammate";
  if (!cursor) return null;
  const { x, y } = cursor;
  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      width={name.length * 10 + 24}
      height={50}
      className="drop-shadow-md relative"
    >
      <MousePointer2
        className="h-4 w-4"
        style={{
          fill: color,
          color: color,
        }}
      />

      <div
        className="absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold"
        style={{ backgroundColor: color }}
      >
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";

export default Cursor;

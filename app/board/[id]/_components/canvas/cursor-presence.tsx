"use client";

import { useOthersConnectionIds } from "@/liveblocks.config";
import { memo } from "react";
import Cursor from "./cursor";

const CursorPresence = memo(() => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((id) => (
        <Cursor key={id} id={id} />
      ))}
    </>
  );
});

CursorPresence.displayName = "CursorPresence";

export default CursorPresence;

"use client";

import { ReactNode } from "react";

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "@/liveblocks.config";
import { Loader2 } from "lucide-react";

export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="animate-spin w-8 h-8" />
          </div>
        }
      >
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

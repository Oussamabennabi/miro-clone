"use client"
import React from "react";
import Canvas from "./_components/canvas/canvas";
import { Id } from "@/convex/_generated/dataModel";
import { Room } from "./_components/room";
interface PageProps {
  params: {
    id: Id<"boards">;
  };
}
const Page = ({ params: { id } }: PageProps) => {
  return (
    <Room roomId={id}>
      <Canvas boardId={id} />
    </Room>
  );
};

export default Page;

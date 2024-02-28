import React from "react";
import Canvas from "./_components/canvas/canvas";
import { Id } from "@/convex/_generated/dataModel";
interface PageProps {
  params: {
    id: Id<"boards">;
  };
}
const Page = ({ params: { id } }: PageProps) => {
  return (
    <div>
      <Canvas boardId={id} />
    </div>
  );
};

export default Page;

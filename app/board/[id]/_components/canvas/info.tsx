"use client";
import { BoardCardMenuItems } from "@/app/dashboard/_components/boards/board-card-menu-items";
import RenameBoardModal from "@/components/modals/rename-board";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Hint } from "@/components/ui/hint";
import Logo from "@/components/ui/logo";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Loader2, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
interface InfoProps {
  boardId: Id<"boards">;
}
const Info = ({ boardId }: InfoProps) => {
  const board = useQuery(api.board.getBoardById, {
    id: boardId,
  });
  const [renameBoardModalOpen, setRenameBoardModalOpen] = useState(false);

  if (!board)
    return (
      <div className="absolute flex gap-1 h-12 min-w-32 items-center p-1.5 justify-start rounded-md top-2 left-2 shadow-md bg-white">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    );
  return (
    <>
      <div className="absolute flex gap-1 h-12 min-w-32 items-center p-1.5 justify-start rounded-md top-2 left-2 shadow-md bg-white">
        <Hint label="Go to dashboard" side="bottom">
          <Link href={"/dashboard"}>
            <Logo />
          </Link>
        </Hint>
        <Hint label={board.title}>
          <Button
            variant={"ghost"}
            className="truncate block max-h-12 max-w-[190px]"
            onClick={() => setRenameBoardModalOpen(true)}
          >
            {board.title}
          </Button>
        </Hint>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size={"icon"}
              variant={"ghost"}
            >
              <Menu className=" h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <BoardCardMenuItems isFavorite={board.isFavorite} board={board} />
        </DropdownMenu>
      </div>
      <RenameBoardModal
        board={{
          id: board._id,
          title: board.title,
        }}
        open={renameBoardModalOpen}
        setOpen={setRenameBoardModalOpen}
      />
    </>
  );
};

export default Info;

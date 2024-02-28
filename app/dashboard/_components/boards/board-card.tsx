"use client";
import { Button } from "@/components/ui/button";
import { P, PMuted, Small } from "@/components/ui/typography";
import { DataModel } from "@/convex/_generated/dataModel";
import { MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { BoardCardMenuItems } from "./board-card-menu-items";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Hint } from "@/components/ui/hint";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
interface BoardCardProps {
  board: DataModel["boards"]["document"];
  isFavorite:boolean
}
export const BoardCard = ({ board,isFavorite }: BoardCardProps) => {
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    e.preventDefault();

    router.push("/board/" + board._id);
  }

  const { userId } = useAuth();

  const isMeLabel = userId === board.authorId ? "You " : board.authorName;

  const createdAtLabel = formatDistanceToNow(board._creationTime, {
    addSuffix: true,
  });


  return (
    <div
      onClick={handleClick}
      className="flex group/card cursor-pointer flex-col relative overflow-hidden  hover:shadow-md shadow-primary/40 transition-all border border-primary/10  rounded-md justify-start gap-2 items-start w-[200px] h-[270px] "
    >
      <div className="relative bg-primary/10 group">
        {/* overlay */}

        <div className=" absolute p-1.5 z-20 flex items-start justify-end  inset-0 w-full opacity-0 transition-all group-hover:opacity-100 bg-black/40 h-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size={"icon"}
                variant={"secondary"}
                className="rounded-full"
              >
                <MoreHorizontal className=" h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <BoardCardMenuItems isFavorite={isFavorite} board={board} />
          </DropdownMenu>
        </div>

        <Image
          alt={board.imageUrl}
          src={board.imageUrl}
          width={200}
          height={300}
          className="h-[200px] object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-1 items-start justify-start p-1">
        <P>
          <div className="w-full flex justify-between items-center">
            {isFavorite && (
              <Star className="!text-yellow-500 mr-2 !fill-yellow-500 h-5 w-5 " />
            )}

            <Hint label={board.title}>
              <span className="truncate block max-h-12 max-w-[170px]">
                {board.title}
              </span>
            </Hint>
          </div>
        </P>
        <PMuted>
          <Small>
            <span className="group-hover/card:opacity-100 block opacity-0 transition-all">
              {isMeLabel + ", " + createdAtLabel}
            </span>
          </Small>
        </PMuted>
      </div>
    </div>
  );
};

"use client";
import { Button } from "@/components/ui/button";
import { H4, Small } from "@/components/ui/typography";
import { DataModel } from "@/convex/_generated/dataModel";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BoardCardMenuItems } from "./board-card-menu-items";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Hint } from "@/components/ui/hint";
interface BoardCardProps {
  board: DataModel["boards"]["document"];
}
export const BoardCard = ({ board }: BoardCardProps) => {
  return (
    <div className="flex group/card cursor-pointer flex-col overflow-hidden  hover:shadow-md shadow-primary/40 transition-all border border-primary/10  rounded-md justify-start gap-2 items-start w-[200px] h-[280px] ">
      <div className="relative dark:bg-neutral-900/60 bg-neutral-100 group">
        {/* overlay */}

        <div className=" absolute p-1.5 flex items-start justify-end  inset-0 w-full opacity-0 transition-all group-hover:opacity-100 bg-black/40 h-full">
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

            <BoardCardMenuItems board={board} />
          </DropdownMenu>
        </div>
        <Image
          alt={board.imageUrl}
          src={board.imageUrl}
          width={200}
          height={300}
          className="h-[210px]"
        />
      </div>
      <div className="flex flex-col gap-1.5 items-start justify-start p-1">
        <H4>
          <Hint label={board.title}>
            <span className="truncate block max-h-12 max-w-[190px]">
              {board.title}
            </span>
          </Hint>
        </H4>
        <Small>
          <span className="group-hover/card:visible invisible  transition-all truncate block max-h-12 max-w-[190px]">
            {board.description}
          </span>
        </Small>
      </div>
    </div>
  );
};

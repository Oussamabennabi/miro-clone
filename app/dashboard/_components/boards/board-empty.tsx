"use client";
import { PMuted } from "@/components/ui/typography";

import Image from "next/image";
import AddBoardButton from "./add-board-btn";
const BoardEmpty = () => {
  
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <Image
        alt="no-favorites image"
        src={"/dashboard/no-boards.svg"}
        width={300}
        height={300}
      />
      <PMuted>You dont have any boards yet!</PMuted>
      <AddBoardButton/>
      
    </div>
  );
};

export default BoardEmpty;

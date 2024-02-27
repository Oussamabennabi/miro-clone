"use client"
import { PMuted } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const FavoritesEmpty = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <Image
        alt="no-favorites image"
        src={"/dashboard/no-favorites.svg"}
        width={300}
        height={300}
      />
      <PMuted>You dont have any favorite boards yet!</PMuted>
    </div>
  );
};

export default FavoritesEmpty;

import { PMuted } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const SearchEmpty = ({searchQ}:{searchQ:string}) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
    <Image
      alt="empty search image"
      src={"/dashboard/no-search.svg"}
      width={300}
      height={300}
    />
    <PMuted>
      No results where found for <b>&quot;{searchQ}&quot;</b>
    </PMuted>
  </div>
  );
};

export default SearchEmpty;

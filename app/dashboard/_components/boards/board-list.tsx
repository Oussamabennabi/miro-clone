"use client";

import { H2 } from "@/components/ui/typography";
import BoardEmpty from "./board-empty";
import FavoritesEmpty from "./favorites-empty";
import SearchEmpty from "./search-empty";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./board-card";
import BoardListHeader from "./board-list-header";

interface BoardListProps {
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ query: { favorites, search } }: BoardListProps) => {
  const data = useQuery(api.board.getBoards);

  if (data?.length && search) {
    return <SearchEmpty searchQ={search} />;
  }
  if (data?.length && favorites) {
    return <FavoritesEmpty />;
  }

  if (!data?.length) {
    return <BoardEmpty />;
  }

  return (
    <div className="w-full h-full flex flex-wrap gap-2 items-center justify-start">
      {data.map((board) => (
        <BoardCard board={board} key={board._id} />
      ))}
    </div>
  );
};

export default BoardList;

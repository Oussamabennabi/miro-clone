"use client";

import BoardEmpty from "./board-empty";
import FavoritesEmpty from "./favorites-empty";
import SearchEmpty from "./search-empty";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./board-card";
import { Loader2 } from "lucide-react";

interface BoardListProps {
  query: {
    search?: string;
    favorites?: string;
  };
  orgId: string;
}

const BoardList = ({ query: { favorites, search }, orgId }: BoardListProps) => {
  const data = useQuery(api.board.getBoards, {
    id: orgId,
    search,
    favorites: favorites === "true" ? true : false,
  });
  if (data === undefined) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin mt-5" />
      </div>
    );
  }
  if (!data.length && search) {
    return <SearchEmpty searchQ={search} />;
  }
  if (!data.length && favorites) {
    return <FavoritesEmpty />;
  }

  if (data && !data.length) {
    return <BoardEmpty />;
  }

  return (
    <div className="w-full h-full flex flex-wrap gap-2 items-center justify-start">
      {data.map((board) => (
        <BoardCard
          isFavorite={board.isFavorite}
          board={board}
          key={board._id}
        />
      ))}
    </div>
  );
};

export default BoardList;

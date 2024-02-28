"use client";
import ChangeBoardThumbnailModal from "@/components/modals/change-board-thumbnail";
import DeleteBoardModal from "@/components/modals/delete-board";
import RenameBoardModal from "@/components/modals/rename-board";
import succesToast from "@/components/toasts/succes-toast";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { DataModel } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import {
  Copy,
  GalleryHorizontalEnd,
  Image as ImageIcon,
  Pen,
  Star,
  Trash,
} from "lucide-react";
import { useEffect, useState } from "react";
interface BoardCardMenuItemsProps {
  board: DataModel["boards"]["document"];
  isFavorite: boolean;
}
export function BoardCardMenuItems({
  board,
  isFavorite,
}: BoardCardMenuItemsProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { mutate, loading } = useApiMutation(api.board.createBoard);
  const { mutate: favorite, loading: loadingFavorite } = useApiMutation(
    api.favoriteBoard.favorite
  );
  const { mutate: unfavorite, loading: loadingUnfavorite } = useApiMutation(
    api.favoriteBoard.unfavorite
  );
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [changeThumbnailModalOpen, setChangeThumbnailModalOpen] =
    useState(false);

  const [renameBoardModalOpen, setRenameBoardModalOpen] = useState(false);
  const handleDuplicate = async () => {
    // todo ... author, authorId
    await mutate({
      description: board.description,
      orgId: board.orgId,
      title: board.title + "(Duplicate)",
      imageUrl: board.imageUrl,
    });
    
    succesToast("Successfuly duplicated board");
  };

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/board/${board._id}`
    );
    succesToast("Successfully copied url.");
  };

  // favorite
  const handleFavorite = async () => {
    if (isFavorite) {
      await unfavorite({
        boardId: board._id,
        orgId: board.orgId,
      });
      succesToast("Successfuly removed from favorites");
    } else {
      await favorite({
        boardId: board._id,
        orgId: board.orgId,
      });
      succesToast("Successfuly added to favorites");
    }
  };

  if (!isMounted) return null;
  return (
    <>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side="right"
        className="w-56"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleCopyUrl}>
            <Copy className="w-4 h-4 mr-2" />
            Copy Url
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            disabled={loadingFavorite || loadingUnfavorite}
            onClick={handleFavorite}
            className="hover:!bg-yellow-500 group hover:!text-white"
          >
            <Star
              className={cn(
                "w-4 h-4 mr-2 text-yellow-500 group-hover:!text-white",
                isFavorite && "!fill-yellow-500"
              )}
            />
            {isFavorite ? "Remove from Favorites" : "Mark Favorite"}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDuplicate}>
            <GalleryHorizontalEnd className="w-4 h-4 mr-2" />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setRenameBoardModalOpen(true)}>
            <Pen className="w-4 h-4 mr-2" />
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setChangeThumbnailModalOpen(true)}>
            <ImageIcon className="w-4 h-4 mr-2" />
            Change Thumbnail
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setDeleteModalOpen(true)}
          className="hover:!bg-red-500 group hover:!text-white"
        >
          <Trash className="w-4 h-4 mr-2 text-red-500 group-hover:!text-white" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
      {/* modals */}
      <div onClick={(e) => e.stopPropagation()}>
        <DeleteBoardModal
          board={{
            id: board._id,
            title: board.title,
          }}
          open={deleteModalOpen}
          setOpen={setDeleteModalOpen}
        />

        <ChangeBoardThumbnailModal
          board={{
            id: board._id,
            title: board.title,
          }}
          open={changeThumbnailModalOpen}
          setOpen={setChangeThumbnailModalOpen}
        />
        <RenameBoardModal
          board={{
            id: board._id,
            title: board.title,
          }}
          open={renameBoardModalOpen}
          setOpen={setRenameBoardModalOpen}
        />
      </div>
    </>
  );
}

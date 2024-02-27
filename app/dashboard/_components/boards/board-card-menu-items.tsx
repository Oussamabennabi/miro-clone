"use client";
import ChangeBoardThumbnailModal from "@/components/modals/change-board-thumbnail";
import DeleteBoardModal from "@/components/modals/delete-board";
import RenameBoardModal from "@/components/modals/rename-board";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { DataModel } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import {
  GalleryHorizontalEnd,
  Image as ImageIcon,
  Pen,
  Star,
  Trash,
} from "lucide-react";
import { useState } from "react";
interface BoardCardMenuItemsProps {
  board: DataModel["boards"]["document"];
}
export function BoardCardMenuItems({ board }: BoardCardMenuItemsProps) {
  const { mutate, loading } = useApiMutation(api.board.createBoard);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [changeThumbnailModalOpen, setChangeThumbnailModalOpen] =
    useState(false);
  const [renameBoardModalOpen, setRenameBoardModalOpen] = useState(false);
  const handleDuplicate = async () => {
    // todo ... author, authorId
    await mutate({
      description: board.description,
      orgId: board.orgId,
      title: board.title+"(Duplicate)",
      imageUrl: board.imageUrl,
    });
    
  };
  return (
    <>
      <DropdownMenuContent side="right" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:!bg-yellow-500 group hover:!text-white">
            <Star className="w-4 h-4 mr-2 text-yellow-500 group-hover:!text-white" />
            Mark Favorite
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
    </>
  );
}

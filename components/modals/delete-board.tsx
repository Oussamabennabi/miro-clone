"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Id } from "@/convex/_generated/dataModel";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface DeleteBoardModalProps {
  board: {
    title: string;
    id: Id<"boards">;
  };
  open: boolean;
  setOpen: any;
}
const DeleteBoardModal = ({ board, open, setOpen }: DeleteBoardModalProps) => {
  const { loading, mutate } = useApiMutation(api.board.deleteBoard);
  const handleDelete = async() => {
    await mutate({
      id: board.id,
    });
    setOpen(false)

  };
  return (
    <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
      <DialogContent>
        are you sure you want to delete <b>{`"${board.title}"`}</b>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} variant={"ghost"}>
            Cancel
          </Button>
          <Button
            variant={"destructive"}
            onClick={handleDelete}
            disabled={loading}
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBoardModal;

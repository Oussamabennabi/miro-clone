"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  
} from "../ui/dialog";
import { Id } from "@/convex/_generated/dataModel";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import {  cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { BOARDS_IMAGES } from "@/lib/constants";
import succesToast from "../toasts/succes-toast";

interface ChangeBoardThumbnailModalProps {
  board: {
    title: string;
    id: Id<"boards">;
  };
  open: boolean;
  setOpen: any;
}
const ChangeBoardThumbnailModal = ({
  board,
  open,
  setOpen,
}: ChangeBoardThumbnailModalProps) => {
  const { loading, mutate } = useApiMutation(api.board.updateBoard);
  const [selectedImage, setSelectedImage] = useState<undefined | number>(
    undefined
  );
  const handleDelete =async () => {
    if (!selectedImage) return;
    await mutate({
      id: board.id,
      imageUrl: `/placeholders/${selectedImage}.svg`,
    });
    
    succesToast("Board Deleted successfuly");
    setOpen(false)
  };
  return (
    <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
      <DialogContent>
        change the thumbnail of <b>{`"${board.title}"`}</b>
        <ScrollArea className="h-[350px] !w-full !p-2">
          <div className="flex flex-wrap gap-2 p-2 items-center justify-start">
            {
            BOARDS_IMAGES.map((img, i) => (
              <Image
                alt={img}
                onClick={() => setSelectedImage(i + 1)}
                key={img + i}
                src={img}
                width={100}
                height={100}
                className={cn(
                  "p-1 h-[100px] aspect-square cursor-pointer rounded-md hover:ring-2 focus-visible:ring-2 ring-primary transition-all",
                  selectedImage === i + 1 && "ring-2"
                )}
              />
            ))}
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} variant={"ghost"}>
            Cancel
          </Button>
          <Button onClick={handleDelete} disabled={loading || !selectedImage}>
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeBoardThumbnailModal;

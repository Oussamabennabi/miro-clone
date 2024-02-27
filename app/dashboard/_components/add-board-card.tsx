"use client";
import { Button } from "@/components/ui/button";
import { Small } from "@/components/ui/typography";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { Loader2, Plus } from "lucide-react";
import React from "react";

const AddBoardCard = () => {
  const { loading, mutate } = useApiMutation(api.board.createBoard);
  const { organization } = useOrganization();
  const handleCreate = () => {
    mutate({
      description: "board description",
      orgId: organization?.id!,
      title: "Board 1",
    });
  };
  return (
    <div
      tabIndex={1}
      className="group cursor-pointer focus-within:outline-none flex justify-center flex-col items-center gap-2"
    >
      <Button
      disabled={loading}

      onClick={handleCreate}
        className="p-1 w-[122px] h-[87px] rounded-md group-hover:ring-2 group-focus-visible:ring-2 ring-primary transition-all"
        size={"icon"}
      >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" />:
        <Plus />
      
      }

      </Button>
      <Small>Add a new board</Small>
    </div>
  );
};

export default AddBoardCard;

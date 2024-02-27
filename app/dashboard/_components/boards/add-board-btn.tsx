"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

const AddBoardButton = () => {
  const { loading, mutate } = useApiMutation(api.board.createBoard);
  const { organization } = useOrganization();
  const router = useRouter();
  const handleCreate = async () => {
    const id = await mutate({
      description: "board description",
      orgId: organization?.id!,
      title: "Untitled",
    });
    router.push("/board/" + id);
  };
  return (
    <Button
      className="flex items-center justify-start gap-2"
      disabled={loading}
      onClick={handleCreate}
      size={"lg"}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      Create a board!
    </Button>
  );
};

export default AddBoardButton;

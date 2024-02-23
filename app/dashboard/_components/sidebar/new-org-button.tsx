"use client";
import { Button } from "@/components/ui/button";
import { DialogTrigger, Dialog, DialogContent } from "@/components/ui/dialog";
import { Hint } from "@/components/ui/hint";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const NewOrgButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  size={"icon"} variant={"secondary"}>
          <Hint label={"Create an organization"} alignOffset={20} side="right">
            <Plus />
          </Hint>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-[480px] border-none bg-transparent">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewOrgButton;

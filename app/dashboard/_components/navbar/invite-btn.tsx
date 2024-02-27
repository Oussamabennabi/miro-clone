"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/ui/hint";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <Hint label={"Invite a friend"} side="bottom">
            <div className=" items-center justify-start flex gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden md:block">Invite</span>
            </div>
          </Hint>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;

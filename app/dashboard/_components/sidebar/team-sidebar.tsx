"use client";
import { Button } from "@/components/ui/button";
import { CircleUser, Plus } from "lucide-react";

const TeamSidebar = () => {
  return (
    <aside className="h-full shadow-lg flex flex-col gap-4 items-center justify-start bg-foreground dark:bg-background border-r-2 p-3 w-14 ">
      <Button size={"icon"}>
        <CircleUser />
      </Button>
      <Button size={"icon"} variant={"secondary"}>
        <Plus />
      </Button>
    </aside>
  );
};

export default TeamSidebar;

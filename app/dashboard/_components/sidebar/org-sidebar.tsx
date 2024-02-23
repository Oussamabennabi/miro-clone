"use client";
import { TooltipProvider } from "@/components/ui/tooltip";
import NewOrgButton from "./new-org-button";
import OrgList from "./org-list";

const OrgSidebar = () => {
  return (
    <aside className="h-full shadow-lg flex flex-col gap-4 items-center justify-start bg-foreground dark:bg-background border-r-2 p-3 w-14  ">
      <TooltipProvider delayDuration={400}>
        <NewOrgButton />
        <OrgList />
      </TooltipProvider>
    </aside>
  );
};

export default OrgSidebar;

"use client";

import Logo from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";


const ProjectsSidebar = () => {
  return (
    <aside className="h-full shadow-lg flex flex-col gap-4 items-start justify-start border-r-2 p-3 w-72 ">
      <Logo />
      <Separator/>
    </aside>
  );
};

export default ProjectsSidebar;

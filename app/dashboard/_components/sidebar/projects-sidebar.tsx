"use client";

import CustomeOrgSwitcher from "@/components/custom-org-switcher";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Star } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const ProjectsSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <aside className="h-full lg:flex hidden shadow-lg  flex-col gap-3 items-start justify-start border-r-2 p-2 w-72 ">
      <Logo />
      <Separator />
      <div>
        <CustomeOrgSwitcher width="275px" />
      </div>
      {/*  */}
      <Button
        asChild
        variant={favorites ? "ghost" : "secondary"}
        className={cn(
          "flex  justify-start items-center gap-3 w-full",
          !favorites && "ring-1 ring-primary"
        )}
      >
        <Link href={{ pathname: "/dashboard" }}>
          <LayoutDashboard />
          <span>Dashboard</span>
        </Link>
      </Button>

      <Button
        asChild
        variant={!favorites ? "ghost" : "secondary"}
        className={cn(
          "flex  justify-start items-center gap-3 w-full",
          favorites && "ring-1 ring-primary"
        )}
      >
        <Link href={{ pathname: "/dashboard", query: { favorites: true } }}>
          <Star />
          <span>Favorites</span>
        </Link>
      </Button>
    </aside>
  );
};

export default ProjectsSidebar;

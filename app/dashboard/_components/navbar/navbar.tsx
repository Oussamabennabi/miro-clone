"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleThemeButton } from "@/components/ui/toggle-theme";

const Navbar = () => {
  return (
    <nav className="p-1 px-3  dark:shadow-neutral-800  flex justify-between items-center shadow-md">
      <div className="flex items-center justify-center gap-4">
        <Input type="search" placeholder="Search here..." />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button size={"sm"}>Sign in</Button>
        <UserButton />
        <ToggleThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;

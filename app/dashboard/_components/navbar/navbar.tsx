"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ToggleThemeButton } from "@/components/ui/toggle-theme";
import SearchInput from "./search-input";
import CustomeOrgSwitcher from "@/components/custom-org-switcher";

const Navbar = () => {
  return (
    <nav className="p-1 px-3 dark:shadow-neutral-800 gap-4 flex justify-between items-center shadow-md">
      <div className="md:flex w-full hidden ">
      <SearchInput />
      </div>
      <div className="flex md:w-fit w-full justify-end items-center gap-2">
        <div className="flex w-full lg:hidden">
          <CustomeOrgSwitcher width="100%" />
        </div>
        <UserButton />
        <ToggleThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;

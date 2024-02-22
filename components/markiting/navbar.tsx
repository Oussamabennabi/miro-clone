"use client";
import { UserButton } from "@clerk/nextjs";
import Logo from "../ui/logo";
import { NavigationMenuLinks } from "./navbar-links";
import { Button } from "../ui/button";
import { ToggleThemeButton } from "../ui/toggle-theme";

const Navbar = () => {
  return (
    <div className="p-1 px-3  dark:shadow-neutral-800  flex justify-between items-center shadow-md">
      <div className="flex items-center justify-center gap-2">
        <Logo />
        <NavigationMenuLinks />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button size={"sm"}>Sign in</Button>
        <UserButton />
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default Navbar;

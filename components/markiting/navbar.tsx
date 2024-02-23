"use client";
import { UserButton } from "@clerk/nextjs";
import Logo from "../ui/logo";
import { NavigationMenuLinks } from "./navbar-links";
import { Button } from "../ui/button";
import { ToggleThemeButton } from "../ui/toggle-theme";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-1 px-3  dark:shadow-neutral-800  flex justify-between items-center shadow-md">
      <div className="flex items-center justify-center gap-2">
        <Logo />
        <NavigationMenuLinks />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button size={"sm"}>Sign in</Button>
        <Link href={"/dashboard"}>
          <Button size={"sm"}>Dashboard</Button>
        </Link>
        <UserButton />
        <ToggleThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;

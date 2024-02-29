"use client"
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { LucideIcon } from "lucide-react";
import React from "react";
interface ToolbarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  isDisabled?: boolean;
}
const ToolbarItem = ({
  icon: Icon,
  isActive,
  isDisabled,
  label,
  onClick,
}: ToolbarItemProps) => {
  return (
    <Hint label={label} side="right">
      <Button
        onClick={onClick}
        size={"icon"}
        variant={isActive?"boardActive":"ghost"}
        disabled={isDisabled}
        className=""
      >
        <Icon />
      </Button>
    </Hint>
  );
};

export default ToolbarItem;

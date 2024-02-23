"use client";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import Image from "next/image";
interface OrgListItemProps {
  id: string;
  imageUrl: string;
  name: string;
}
const OrgListItem = ({ id, imageUrl, name }: OrgListItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();
  const isSelected = organization?.id === id;

  return (
    <Button
      onClick={() => setActive && setActive({ organization: id })}
      className={cn("relative  ", isSelected && "ring-2 ring-primary")}
      size={"icon"}
      variant={isSelected ? "secondary" : "ghost"}
    >
      <Hint label={name} alignOffset={10} side="right">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className={cn(
            "w-full rounded-lg h-full opacity-90 object-cover",
            isSelected && "ring-2 ring-primary opacity-100"
          )}
        />
      </Hint>
    </Button>
  );
};

export default OrgListItem;

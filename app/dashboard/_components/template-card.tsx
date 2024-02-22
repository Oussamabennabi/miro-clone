import { Small } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
interface TemplateCardProps {
  title: string;
  img: string;
}
const TemplateCard = ({ img, title }: TemplateCardProps) => {
  return (
    <div tabIndex={1} className="group cursor-pointer focus-within:outline-none flex justify-center flex-col items-center gap-2">
      <Image
        alt={title + " image"}
        className="p-1 rounded-md group-hover:ring-2 group-focus-visible:ring-2 ring-primary transition-all"
        src={img}
        width={122}
        height={87}
      />
      <Small>{title}</Small>
    </div>
  );
};

export default TemplateCard;

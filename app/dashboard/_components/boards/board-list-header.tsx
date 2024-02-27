import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { H2 } from "@/components/ui/typography";
import { Grid, Rows3 } from "lucide-react";
import React from "react";

const BoardListHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <H2>Your Boards</H2>

      <div className="flex gap-3 items-center justify-center">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <ToggleGroup type="multiple">
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Grid />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <Rows3 />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default BoardListHeader;

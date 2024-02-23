"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
const SearchInput = () => {
  const router = useRouter();

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 400);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/dashboard",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="relative w-full">
      <Search className="absolute top-1/2 -translate-y-1/2 left-3 transform" />
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Searhc anything here..."
        className="w-full max-w-[500px] pl-10"
      />
    </div>
  );
};

export default SearchInput;

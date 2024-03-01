"use client";
import { H1, PMuted } from "@/components/ui/typography";
import Image from "next/image";

const Page = () => {
  return (
    <main className="p-5 flex items-center justify-center gap-5 flex-col ">
      <Image
        alt="landing-page-image"
        width={"600"}
        height={"400"}
        className="w-full h-full  max-w-[600px] max-h-[400px]"
        src={"/markiting/landing-page-cover.svg"}
      />
      <div className="max-w-[700px] mt-8  text-center space-y-8">
        <H1>Enter with a dream. Exit with the next big thing.</H1>
        <PMuted>
          Build, iterate, and design faster with Visionary Hub — the visual
          workspace for innovation.
        </PMuted>
      </div>
    </main>
  );
};

export default Page;

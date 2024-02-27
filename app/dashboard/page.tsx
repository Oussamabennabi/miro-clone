"use client";

import BoardList from "./_components/boards/board-list";
import EmptyOrg from "./_components/boards/empty-org";
import { useOrganization } from "@clerk/nextjs";
import TemplateCards from "./_components/template-cards";
import BoardListHeader from "./_components/boards/board-list-header";

interface PageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const Page = ({ searchParams }: PageProps) => {
  const { organization } = useOrganization();
  return (
    <main className="p-4 space-y-5 h-full flex-col flex justify-center items-str\">
      {organization && <TemplateCards />}
      {organization && <BoardListHeader />}

      {!organization ? <EmptyOrg /> : <BoardList query={searchParams} />}
    </main>
  );
};

export default Page;

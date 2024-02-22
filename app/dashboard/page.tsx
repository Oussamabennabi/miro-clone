import TemplateCard from "@/app/dashboard/_components/template-card";
import { H2, Small } from "@/components/ui/typography";
import Link from "next/link";
const Page = () => {
  return (
    <main className="p-4 space-y-5">
      <H2>Create a board</H2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Small>Recommended Templates</Small>
          <Small><Link href={''} className="hover:underline">See All</Link></Small>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-5">
          <TemplateCard
            img="/markiting/landing-page-cover.svg"
            title="New Board"
          />
          <TemplateCard
            img="/markiting/landing-page-cover.svg"
            title="Mini Map"
          />
          <TemplateCard
            img="/markiting/landing-page-cover.svg"
            title="Kanban Framework"
          />
          <TemplateCard
            img="/markiting/landing-page-cover.svg"
            title="Notes"
          />
          <TemplateCard
            img="/markiting/landing-page-cover.svg"
            title="Customer"
          />
         
        </div>
      </div>
    </main>
  );
};

export default Page;

import Navbar from "@/app/dashboard/_components/navbar/navbar";
import ProjectsSidebar from "@/app/dashboard/_components/sidebar/projects-sidebar";
import OrgSidebar from "./_components/sidebar/org-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex overflow-hidden h-full">
      <OrgSidebar />
      <ProjectsSidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <ScrollArea>{children}</ScrollArea>
      </div>
    </div>
  );
};

export default Layout;

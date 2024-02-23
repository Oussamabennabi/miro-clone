import Navbar from "@/app/dashboard/_components/navbar/navbar";
import ProjectsSidebar from "@/app/dashboard/_components/sidebar/projects-sidebar";
import OrgSidebar from "./_components/sidebar/org-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <OrgSidebar />
      <ProjectsSidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

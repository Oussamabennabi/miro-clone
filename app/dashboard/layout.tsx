import Navbar from "@/app/dashboard/_components/navbar/navbar";
import ProjectsSidebar from "@/app/dashboard/_components/sidebar/projects-sidebar";
import TeamSidebar from "@/app/dashboard/_components/sidebar/team-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <TeamSidebar />
      <ProjectsSidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

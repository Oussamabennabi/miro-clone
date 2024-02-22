import Navbar from "@/components/markiting/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;

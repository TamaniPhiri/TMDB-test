import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full items-center justify-center max-w-7xl mx-auto flex flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

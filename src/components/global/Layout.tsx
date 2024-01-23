interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full items-center justify-center px-4 md:px-12 max-w-7xl flex flex-col">
      <nav>nav</nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

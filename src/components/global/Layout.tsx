interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav>nav</nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

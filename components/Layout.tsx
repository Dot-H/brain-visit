import Meta from "./meta";

type LayoutPRops = {
  children: Readonly<React.ReactNode> | ReadonlyArray<React.ReactNode>;
};

const Layout = ({ children }: LayoutPRops) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

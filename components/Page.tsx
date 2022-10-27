import Meta from "components/Meta";

type PageProps = {
  children: Readonly<React.ReactNode> | ReadonlyArray<React.ReactNode>;
};

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Page;

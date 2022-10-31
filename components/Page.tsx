import Meta, { MetaProps } from "components/Meta";

type PageProps = {
  children: Readonly<React.ReactNode> | ReadonlyArray<React.ReactNode>;
} & MetaProps;

const Page = ({ children, ...metaProps }: PageProps) => {
  return (
    <>
      <Meta {...metaProps} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Page;

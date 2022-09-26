type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-2 sm:px-0 xl:px-5">{children}</div>
  );
};

export default Container;

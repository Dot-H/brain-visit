export type PostTitleProps = React.HTMLAttributes<HTMLElement>;

const PostTitle = (props: PostTitleProps) => (
  <h1
    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
    {...props}
  />
);

export default PostTitle;

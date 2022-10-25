// Utils
import cn from "classnames";

export type PostTitleProps = React.HTMLAttributes<HTMLElement>;

const PostTitle = (props: PostTitleProps) => (
  <h1
    {...props}
    className={cn(
      props.className,
      "text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-center"
    )}
  />
);

export default PostTitle;

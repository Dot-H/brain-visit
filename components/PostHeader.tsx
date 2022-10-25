// Components
import CoverImage from "components/CoverImage";
import PostTitle from "components/PostTitle";

// Types
import type { Post } from "lib/posts";

type PostHeaderProps = {
  post: Readonly<Post>;
};

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <>
      <PostTitle className="mb-3">{post.metadata.title}</PostTitle>
      <span className="text-lg block text-center text-secondary mb-3">
        {new Date(post.metadata.releaseDate).toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
      <div className="mb-8 md:mb-16 sm:mx-0 text-center">
        <CoverImage post={post} className={"shadow-sm flex m-auto"} />
      </div>
    </>
  );
};

export default PostHeader;

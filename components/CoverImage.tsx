// Components
import Image, { ImageProps } from "next/future/image";

// Types
import type { Post } from "lib/posts";

type CoverImageProps = Partial<ImageProps> & {
  post: Readonly<Pick<Post, "cover" | "metadata">>;
};

const CoverImage = ({ post, ...props }: CoverImageProps) => {
  return (
    <Image
      {...post.cover.imageProps}
      alt={`"${post.metadata.title}" cover`}
      {...props}
    />
  );
};

export default CoverImage;

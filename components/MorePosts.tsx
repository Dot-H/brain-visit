// Components
import PostCard from "components/PostCard";

// Types
import type { Post, PostTag } from "lib/posts";

export type MorePostsProps = React.HTMLAttributes<HTMLElement> & {
  posts: ReadonlyArray<Post>;
  categoryTag: Readonly<PostTag>;
};

const MorePosts = ({ posts, categoryTag, ...rest }: MorePostsProps) => {
  return (
    <section {...rest}>
      <h4 className="text-center mb-8 text-4xl tracking-tighter leading-tight">
        Other posts might interest you
      </h4>
      <div className="grid content-ceter gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
            href={`/blog/${categoryTag}/${post.slug}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;

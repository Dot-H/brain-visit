// Components
import PostCard from "components/PostCard";

// Types
import type { Post, PostCategory } from "lib/posts";

export type MorePostsProps = React.HTMLAttributes<HTMLElement> & {
  posts: ReadonlyArray<Post>;
  category: Readonly<PostCategory>;
};

const MorePosts = ({ posts, category, ...rest }: MorePostsProps) => {
  return (
    <section {...rest}>
      <h4 className="text-center mb-8 text-4xl tracking-tighter leading-tight">
        Other posts might interest you
      </h4>
      <div className="grid items-center content-center gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
            href={`/blog/${category}/${post.slug}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;

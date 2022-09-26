// Components
import Image from "next/image";
import Link from "next/link";

// Types
import type { Post } from "lib/posts";

export type PostCardProps = React.HTMLAttributes<HTMLElement> & {
  post: Readonly<Post>;
  href: string;
};

const PostCard = ({ post, href, ...rest }: PostCardProps) => {
  return (
    <Link href={href}>
      <article
        className={`md:w-96 w-[350px] drop-shadow-2xl hover:scale-103 hover:cursor-pointer transition ease-out max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}
        {...rest}
      >
        <Image
          src={`/assets/blog/posts/${post.slug}/cover.webp`}
          width={384}
          height={250}
          className="rounded-t-lg"
          alt="cover"
        />
        <div className="flex flex-col p-5 h-[320px]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.metadata.title}
          </h5>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            {post.metadata.description}
          </p>
          <p className="mt-auto text-gray-500 mb-1 dark-text-gray-300">
            {new Date(post.metadata.releaseDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;

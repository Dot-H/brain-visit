// Components
import Chip from "components/Chip";
import CoverImage from "./CoverImage";
import Link from "next/link";

// Types
import type { PostTag, Post } from "lib/posts";

export type PostCardProps = React.HTMLAttributes<HTMLElement> & {
  post: Readonly<Post>;
  href: string;
};

const PostCard = ({ post, href, ...rest }: PostCardProps) => {
  return (
    <Link href={href}>
      <article
        className={`md:w-96 w-[350px] drop-shadow-2xl hover:scale-103 hover:cursor-pointer transition ease-out max-w-sm bg-white rounded-2xl shadow-md bg-rose-200/25 dark:bg-zinc-700/25`}
        {...rest}
      >
        <CoverImage
          post={post}
          width={350}
          height={300}
          style={{ width: 350, height: 300, margin: "auto" }}
        />
        <div className="flex flex-col p-5 pt-2 lg:h-[320px]">
          <div className="flex space-x-2 mb-3">
            {post.metadata.tags.map((t) => (
              <Chip color={TAG_COLOR[t]} key={`tag-${post.slug}-${t}`}>
                {t}
              </Chip>
            ))}
          </div>
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

// Information for tailwindCSS:
// See https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss
// text-gray-500 border-gray-500
// text-purple-400 border-purple-400
// text-rose-400 border-rose-400
// text-teal-500 border-teal-500
// text-green-600 border-green-600
// text-blue-500 border-blue-500
// text-orange-400 border-orange-400
const TAG_COLOR: Readonly<Record<PostTag, string>> = {
  climbing: "gray-500",
  design: "purple-400",
  devops: "rose-400",
  golang: "teal-500",
  hiking: "green-600",
  outdoor: "blue-500",
  performance: "orange-400",
};

export default PostCard;

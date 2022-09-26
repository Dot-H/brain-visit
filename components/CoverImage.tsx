// Components
import Link from "next/link";

// Utils
import cn from "classnames";

type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: CoverImageProps) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        "shadow-sm",
        {
          "hover:shadow-lg transition-shadow duration-200": slug,
        },
        "flex m-auto"
      )}
    />
  );

  return (
    <div className="sm:mx-0 display-block">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;

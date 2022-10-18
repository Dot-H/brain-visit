// Components
import Link from "next/link";

// Utils
import cn from "classnames";

export type ArticleSectionProps = React.HTMLAttributes<HTMLElement> & {
  title: React.ReactNode;
  content: React.ReactNode;
  href: string;
};

const ArticleSection = ({
  title,
  content,
  className,
  children,
  href,
  ...rest
}: ArticleSectionProps) => {
  return (
    <Link href={href}>
      <article
        className={cn(
          "h-[350px] z-20 alpha-on-hover flex w-full justify-between rounded-2xl cursor-pointer transition-colors duration-300 bg-section-engineering-bg",
          className
        )}
        {...rest}
      >
        <div className="p-8 pt-14 flex flex-col prose prose-light dark:prose-dark">
          <h1 className="text-xl">{title}</h1>
          <p className="text-justify" style={{ marginTop: 0 }}>
            {content}
          </p>
          <a className="mt-auto" style={{ display: "block" }}>
            Read more &gt;
          </a>
        </div>
        {children}
      </article>
    </Link>
  );
};

export default ArticleSection;

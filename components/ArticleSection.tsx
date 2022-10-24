// Components
import Link from "next/link";

// Utils
import cn from "classnames";

// Libs
import { useBreakpoint } from "lib/responsive";

export type ArticleSectionProps = React.HTMLAttributes<HTMLElement> & {
  title: React.ReactNode;
  content: React.ReactNode;
  href: string;
};

/*
 * ArticleSection permits to display a link to a group of articles as a card
 * for small screens and as a horizontal section for large screens.
 *
 * The design is responsive and for large screens renders as:
 * ---(flex-row <article>)---
 * | <prose>								|
 * | 	{title}								|
 * | 	{content}							|
 * | </prose>								|
 * | {children}             |
 * --------</article>--------
 *
 * For smaller screens, it displays as a card:
 * --(flex-column <article>)--
 * | <prose>                 |
 * | 	{title}                |
 * |  {children}             |
 * | 	{content}              |
 * | </prose>                |
 * --------</article>---------
 */
const ArticleSection = ({
  title,
  content,
  className,
  children,
  href,
  ...rest
}: ArticleSectionProps) => {
  const { isLg } = useBreakpoint("lg");

  return (
    <Link href={href}>
      <article
        className={cn(
          "lg:h-[350px] h-auto z-20 alpha-on-hover flex w-full justify-between rounded-2xl cursor-pointer transition-colors duration-300 bg-section-engineering-bg",
          className
        )}
        {...rest}
      >
        <div className="p-8 pt-14 flex flex-col prose prose-light dark:prose-dark">
          <h1 className="text-xl text-center lg:text-left">{title}</h1>
          {isLg ? null : children}
          <p className="text-justify" style={{ marginTop: 0 }}>
            {content}
          </p>
          <a className="mt-auto" style={{ display: "block" }}>
            Read more &gt;
          </a>
        </div>
        {isLg ? children : null}
      </article>
    </Link>
  );
};

export default ArticleSection;

import Link from "next/link";

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
          "w-[310px] h-[450px] cursor-pointer transition-colors duration-300 rounded-3xl border-solid border radius-30 border-white z-10 drop-shadow-2xl",
          className
        )}
        {...rest}
      >
        <header className="p-6">{title}</header>
        <p className="text-justify p-8">{content}</p>
        {children}
      </article>
    </Link>
  );
};

export default ArticleSection;

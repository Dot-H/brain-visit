import cn from "classnames";
import Link from "next/link";

export type SectionProps = {
  title: string;
  content: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
};

const Section = ({ title, content, className, children }: SectionProps) => {
  return (
    <Link href={"/blog/tech"}>
      <article
        className={cn(
          "w-[350px] h-[450px] cursor-pointer transition-opacity rounded-3xl border-solid border radius-30 border-white z-10 drop-shadow-2xl opacity-50 hover:opacity-70",
          className
        )}
      >
        <header className="text-2xl text-white text-center p-6">{title}</header>
        <p>{content}</p>
        {children}
      </article>
    </Link>
  );
};

export default Section;

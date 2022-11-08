import React from "react";

// Components
import Image from "next/future/image";

// Utils
import cn from "classnames";

// Images
import SittenOnARidge from "public/assets/self_on_a_ridge.webp";

const AboutMe = (props: React.HTMLAttributes<HTMLElement>) => (
  <article
    {...props}
    className={cn(props.className, "m-auto lg:max-w-[80%] text-primary")}
  >
    <h1 className="text-center text-4xl">About me</h1>
    <span className="w-[12ch] h-[1px] my-3 block border-b m-auto" />
    <div className="flex flex-col mt-10 lg:flex-row items-center justify-center">
      <Image
        className="rounded-full mx-12 mb-4 lg:mb-0"
        alt="Myself sitten a ridge"
        src={SittenOnARidge}
        height="250"
        width="250"
        placeholder="blur"
      />
      <p className="text-lg p-6 md:p-4 lg:p-0">
        Software engineer, climber and trailer, I like to refer myself as a
        curious minded guy with a lot of passions. From 2015 to 2020 I studied
        computer science at <Link href="https://www.epita.fr/">Epita</Link>{" "}
        where I had the chance to join the{" "}
        <Link href="https://blog.lse.epita.fr/categories/">LSE</Link>, a system
        and security laboratory. From 2017 to 2020 I&apos;ve also been a
        teaching assistant in C, C++, C# and led a kernel course. In parallel,
        in late 2018, I founded a company named{" "}
        <Link href="https://ekee.io">eKee</Link> which developed a plateform to
        gather and exchange any kind of data in an automated way.
        <br /> In april 2022 I passed on my company to take some time to travel,
        run the Alps and the Pyrenees, climb as much as possible and learn more
        about mountaineering.
      </p>
    </div>
  </article>
);

const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <b className="prose dark:prose-dark text-lg">
    <a target="_blank" rel="noopener noreferrer" {...props} />
  </b>
);

export default AboutMe;

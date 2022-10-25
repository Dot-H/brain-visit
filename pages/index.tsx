// Components
import Head from "next/head";
import Image from "next/future/image";
import AboutMe from "components/AboutMe";
import Container from "components/container";
import Intro from "components/Intro";
import Layout from "components/Layout";
import Nav from "components/Nav";
import Section from "components/ArticleSection";

// Svgs
import ClimbingManSVG from "components/svgs/ClimbingMan";
import CodingManSVG from "components/svgs/CodingMan";
import MountainsBackgroud from "components/svgs/MountainsBackground";
import React from "react";

// Images
import AiguillesRougesCover from "public/assets/blog/posts/aiguilles-rouges/cover.webp";
import QueyrasCover from "public/assets/blog/posts/queyras/cover.jpg";
import SqlToJSONCover from "public/assets/blog/posts/sql-to-json/cover.webp";
import StartupStagingEnvCover from "public/assets/blog/posts/startup-staging-env/cover.webp";
import UCPAAlpinismCover from "public/assets/blog/posts/ucpa-alpinism/cover.webp";
import ZeroConfigQlCover from "public/assets/blog/posts/zero-configuration-ql/cover.webp";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Alexandre Bernard&apos;s website</title>
      </Head>
      <Container>
        <Nav />
        <Intro />
        <section className="text-white z-50 flex flex-col pt-16 pb-32 space-y-48 m-auto sm:w-sm lg:w-full justify-center">
          <Section
            href="/blog/engineering"
            title="Engineering articles"
            content="Learn more about the engineering work I have been doing the past years. A place where I talk about performance tuning, software designing, web application development and devops stuff !"
          >
            <OverlappingCardsEngineer />
            <CodingManSVG className="absolute -translate-y-[124%] lg:-translate-y-[66%] translate-x-7" />
          </Section>
          <Section
            className="flex-row-reverse"
            href="/blog/excursions"
            title="Excursions"
            content="A group of posts about the excursions and the projects which really impacted me. Trailing, climbing, alpinism, hikes... Dive into some of my passions !"
          >
            <OverlappingCardsExcursions />
            <ClimbingManSVG className="absolute -translate-y-20 lg:-translate-y-6 -translate-x-7" />
          </Section>
          <AboutMe className="h-auto z-20" />
        </section>
      </Container>
      <MountainsBackgroud />
    </Layout>
  );
}

const OverlappingCardsEngineer = () => (
  <div className="overlapping-container">
    <div id="card-one-engineer" className="card">
      <Image
        alt={'"Zero configuration query language" post\'s cover'}
        src={ZeroConfigQlCover}
        width={220}
        height={220}
        placeholder="blur"
      />
    </div>
    <div id="card-two-engineer" className="card">
      <Image
        alt={"\"Setting up a startup's staging environment\" post's cover"}
        src={StartupStagingEnvCover}
        width={220}
        height={220}
        placeholder="blur"
      />
    </div>
    <div id="card-three-engineer" className="card">
      <Image
        alt={'"Convert SQL results to JSON representation" post\'s cover'}
        src={SqlToJSONCover}
        width={220}
        height={220}
        placeholder="blur"
      />
    </div>
  </div>
);

const OverlappingCardsExcursions = () => (
  <div className="overlapping-container">
    <div id="card-one-excursions" className="card">
      <Image
        alt={"Dry tooling"}
        src={UCPAAlpinismCover}
        width={220}
        height={220}
        placeholder="blur"
      />
    </div>
    <div id="card-two-excursions" className="card">
      <Image
        alt={'"Circuling the Queyras by the summits" post\'s cover'}
        src={QueyrasCover}
        width={220}
        height={220}
        placeholder="blur"
      />
    </div>
    <div id="card-three-excursions" className="card">
      <Image
        alt={'"Circuling the Queyras by the summits" post\'s cover'}
        src={AiguillesRougesCover}
        width={220}
        height={220}
        placeholder="blur"
      />
    </div>
  </div>
);

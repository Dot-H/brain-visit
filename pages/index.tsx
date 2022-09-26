import Head from "next/head";
import Link from "next/link";

import ClimbingManSVG from "components/svgs/ClimbingMan";
import CodingManSVG from "components/svgs/CodingMan";
import Container from "components/container";
import Intro from "components/Intro";
import Layout from "components/Layout";
import MountainsBackgroud from "components/svgs/MountainsBackground";
import Nav from "components/Nav";
import Section from "components/ArticleSection";
import ThinkingManSVG from "components/svgs/ThinkingMan";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Alexandre Bernard&apos;s website</title>
      </Head>
      <Container>
        <Nav />
        <Intro />
        <section className="text-white flex flex-wrap md:-m-12 w-full justify-center">
          <Section
            href="/blog/engineering"
            className="bg-section-engineering-bg alpha-on-hover m-12"
            title="Engineering articles"
            content=""
          >
            <CodingManSVG className="absolute -top-[70px] left-[20px]" />
          </Section>
          <Section
            href="/blog/excursions"
            title="Excursions"
            className="bg-section-excursions-bg alpha-on-hover m-12"
            content=""
          >
            <ClimbingManSVG className="absolute -bottom-[17px] -left-[1px]" />
          </Section>
          <Section
            href="/blog/thoughts"
            title="Random thoughts"
            className="bg-section-thoughts-bg alpha-on-hover m-12"
            content=""
          >
            <ThinkingManSVG className="absolute right-[10px] -top-[70px]" />
          </Section>
        </section>
      </Container>
      <MountainsBackgroud />
    </Layout>
  );
}

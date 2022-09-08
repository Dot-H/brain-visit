import Container from "../components/container";
import Head from "next/head";
import Intro from "../components/Intro";
import Layout from "../components/layout";
import Nav from "../components/Nav";
import Post from "../interfaces/post";
import Section from "../components/Section";

import { getAllPosts } from "../lib/api";
import MountainsBackgroud from "../components/MountainsBackground";
import CodingManSVG from "../components/CodingManSVG";
import ClimbingManSVG from "../components/ClimbingManSVG";
import ThinkingManSVG from "../components/ThinkingManSVG";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Alexandre Bernard&apos;s website</title>
        </Head>
        <Container>
          <Nav />
          <Intro />
          <section className="flex flex-wrap lg:-m-12 -m-5 w-full sm:justify-center">
            <Section
              className="bg-section-tech-bg lg:m-12 m-5"
              title="Tech articles"
              content=""
            >
              <CodingManSVG className="absolute -top-[70px] left-[20px]" />
            </Section>
            <Section
              title="Excursions"
              className="bg-section-excursions-bg lg:m-12 m-5"
              content=""
            >
              <ClimbingManSVG className="absolute -bottom-[17px] -left-[1px]" />
            </Section>
            <Section
              title="Random thoughts"
              className="bg-section-thoughts-bg lg:m-12 m-5"
              content=""
            >
              <ThinkingManSVG className="absolute right-[10px] -top-[70px]" />
            </Section>
          </section>
        </Container>
        <MountainsBackgroud />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

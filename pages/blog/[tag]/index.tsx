import Head from "next/head";
import Link from "next/link";

// Components
import Container from "components/container";
import Layout from "components/Layout";
import Nav from "components/Nav";
import PostCard from "components/PostCard";

// Libs
import * as post from "lib/posts";

// Types
import type { GetStaticProps } from "next";

type IndexProps = {
  posts: ReadonlyArray<post.Post>;
  category: string;
};

export default function Index({ posts, category }: IndexProps) {
  return (
    <Layout>
      <Head>
        <title>Alb&apos;s blog - {category}</title>
      </Head>
      <Container>
        <Nav />
        <section className="my-8 grid content-center gap-8 md:gap-6 xl:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
          {posts.map((p) => (
            <PostCard
              key={`post-card-${p.slug}`}
              href={`./${category}/${p.slug}`}
              post={p}
            />
          ))}
        </section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<
  IndexProps,
  { tag: post.PostTag }
> = ({ params }) => {
  const posts = post.getPostsMatching((p) =>
    p.metadata.tags.includes(params.tag)
  );

  return {
    props: { posts, category: params.tag },
  };
};

export async function getStaticPaths() {
  return {
    paths: Object.values(post.PostTag).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

import Head from "next/head";

// Components
import Container from "components/container";
import Layout from "components/Layout";
import Nav from "components/Nav";
import PostCard from "components/PostCard";

// Libs
import { getPostsMatching, CATEGORY_VALUES } from "lib/posts";

// Types
import type { Post, PostCategory } from "lib/posts";
import type { GetStaticProps } from "next";

type IndexProps = {
  posts: ReadonlyArray<Post>;
  category: string;
};

export default function Index({ posts, category }: IndexProps) {
  return (
    <Layout>
      <Head>
        <title key={"title"}>{`Alb's blog - ${category}`}</title>
      </Head>
      <Container>
        <Nav />
        <section className="my-12 lg:my-24 grid content-center gap-12 md:gap-6 xl:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
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
  { category: PostCategory }
> = async ({ params }) => {
  const posts = await getPostsMatching(
    (p) => p.metadata.category === params.category
  );

  return {
    props: { posts, category: params.category },
  };
};

export async function getStaticPaths() {
  return {
    paths: Array.from(CATEGORY_VALUES.keys()).map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  };
}

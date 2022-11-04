import Head from "next/head";

// Components
import Container from "components/container";
import Page from "components/Page";
import Nav from "components/Nav";
import PostCard from "components/PostCard";

// Libs
import { getPostsMatching, CATEGORY_VALUES } from "lib/posts";

// Types
import type { Post, PostCategory } from "lib/posts";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";

type IndexProps = {
  posts: ReadonlyArray<Post>;
  category: PostCategory;
  buildTime: Readonly<string>;
};

export default function Index({ posts, category, buildTime }: IndexProps) {
  const router = useRouter();

  return (
    <Page
      type="WebSite"
      buildTime={buildTime}
      seo={{
        title: `Alb's blog - ${category}`,
        description:
          category === ("ENGINEERING" as PostCategory)
            ? "All the articles about my engineering work"
            : "All the articles about my different outdoor excursions and experiences",
        image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/og`,
        url: router.asPath,
      }}
    >
      <Container>
        <Nav />
        <section className="my-8 lg:my-24 grid content-center gap-8 md:gap-6 xl:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
          {posts.map((p) => (
            <PostCard
              key={`post-card-${p.slug}`}
              href={`./${category}/${p.slug}`}
              post={p}
            />
          ))}
        </section>
      </Container>
    </Page>
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
    props: {
      posts,
      category: params.category,
      buildTime: new Date().toISOString().split("T")[0],
    },
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

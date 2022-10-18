// Components
import Container from "components/container";
import ErrorPage from "next/error";
import Head from "next/head";
import Layout from "components/Layout";
import MorePosts from "components/MorePosts";
import Nav from "components/Nav";
import PostBody from "components/PostBody";
import PostHeader from "components/PostHeader";
import PostTitle from "components/PostTitle";

// Hooks
import { useRouter } from "next/router";

// Libs
import * as post from "lib/posts";
import markdownToHtml from "lib/markdownToHtml";

// Types
import type { GetStaticPathsResult, GetStaticProps } from "next";

type CategoryPostListProps = {
  currentCategory: post.PostTag;
  post: Readonly<post.Post>;
  morePosts: ReadonlyArray<post.Post>;
};

export default function CategoryPostList({
  currentCategory,
  post: p,
  morePosts,
}: CategoryPostListProps) {
  const router = useRouter();
  if (!router.isFallback && !p?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Nav />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 mx-2">
              <Head>
                <title>{p.metadata.title}</title>
                {/** TODO: og:image */}
                <meta property="og:image" content={"FIXME"} />
              </Head>
              <PostHeader
                title={p.metadata.title}
                coverImage={`/assets/blog/posts/${p.slug}/cover.webp`}
                date={p.metadata.releaseDate}
              />
              <PostBody htmlContent={p.content} />
            </article>
            <MorePosts
              posts={morePosts}
              categoryTag={currentCategory}
              className="mb-32"
            />
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
    tag: post.PostTag;
  };
};

export const getStaticProps: GetStaticProps<
  CategoryPostListProps,
  Params["params"]
> = async ({ params }) => {
  const p = post.getPostBySlug(params.slug);
  const content = await markdownToHtml(p.content || "");
  const posts = post.getPostsMatching(
    (p) => p.metadata.tags.includes(params.tag) && p.slug !== params.slug
  );

  return {
    props: {
      post: {
        ...p,
        content,
      },
      currentCategory: params.tag,
      morePosts: posts,
    },
  };
};

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<Params["params"]>
> {
  // Retrieve all the posts
  const posts = post.getPostsMatching(Boolean);

  return {
    paths: posts.flatMap((p) =>
      p.metadata.tags.map((tag) => ({ params: { tag, slug: p.slug } }))
    ),
    fallback: false,
  };
}

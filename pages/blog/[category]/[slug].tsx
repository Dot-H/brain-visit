// Components
import Container from "components/container";
import ErrorPage from "next/error";
import Head from "next/head";
import Page from "components/Page";
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
  currentCategory: post.PostCategory;
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
    <Page
      type="BlogPosting"
      buildTime={p.metadata.releaseDate}
      seo={{
        title: p.metadata.title,
        description: p.metadata.description,
        image: p.ogImageURL,
        url: router.asPath,
      }}
    >
      <Container>
        <Nav />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mt-16 mb-32 mx-2">
              <PostHeader post={p} />
              <PostBody htmlContent={p.content} />
            </article>
            <MorePosts
              posts={morePosts}
              category={currentCategory}
              className="mb-32"
            />
          </>
        )}
      </Container>
    </Page>
  );
}

type Params = {
  params: {
    slug: string;
    category: post.PostCategory;
  };
};

export const getStaticProps: GetStaticProps<
  CategoryPostListProps,
  Params["params"]
> = async ({ params }) => {
  const p = await post.getPostBySlug(params.slug);
  const content = await markdownToHtml(p.content || "");
  const posts = await post.getPostsMatching(
    (p) => p.metadata.category === params.category && p.slug !== params.slug
  );

  return {
    props: {
      post: {
        ...p,
        content,
      },
      currentCategory: params.category,
      morePosts: posts,
    },
  };
};

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<Params["params"]>
> {
  // Retrieve all the posts
  const posts = await post.getPostsMatching(Boolean);

  return {
    paths: posts.map((p) => ({
      params: { category: p.metadata.category, slug: p.slug },
    })),
    fallback: false,
  };
}

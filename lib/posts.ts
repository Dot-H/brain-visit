/**
 * This file exposes the API to retrieve and read the available blog posts.
 * The structure of a post and how to handle them is described in
 * [this doc](../doc/posts.md)
 */

// Utils
import fs from "fs";
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";
import { join } from "path";

// Types
import type { ImageProps } from "next/future/image";

/**
 * Directory into which all the posts are present.
 *
 * @see [the doc](../doc/posts.md) to know more about the structure of the
 * [content/posts/](../content/posts/) directory
 */
const POST_DIRECTORY = join(process.cwd(), process.env.POST_DIRECTORY);

export type Post = {
  /** Slug of the post */
  slug: string;

  /** Raw content present in the post */
  content: string;

  /** Metadata used to describe the post */
  metadata: PostMetadata;

  /** Data about the cover image */
  cover: CoverProps;

  /** Encoded url to retrieve the og image */
  ogImageURL: string;
};

export type PostMetadata = {
  /** Date at which the post was released in the format yyyy-mm-dd */
  releaseDate: string;

  /** Displayed title of the post */
  title: string;

  /** Category used to qualify a post */
  category: PostCategory;

  /** List of the tags used to qualify a post */
  tags: PostTag[];

  /**
   * Post's description displayed to the user. Undefined if not given in the
   * index.mdx metadata.
   */
  description?: string;
};

export type CoverProps = {
  /** src URL permitting to retrieve the post's cover image */
  srcURL: string;

  /** Props to pass as {@link ImageProps} to the next/future/image component */
  imageProps: Omit<ImageProps, "alt">;
};

/** Valid value as a {@link Post}'s category */
export enum PostCategory {
  ENGINEERING = "engineering",
  EXCURSIONS = "excursions",
}
export const CATEGORY_VALUES = new Set(Object.values(PostCategory));

/** Valid value as a {@link Post}'s tag */
export enum PostTag {
  CLIMBING = "climbing",
  DESIGN = "design",
  DEVOPS = "devops",
  GOLANG = "golang",
  HIKING = "hiking",
  OUTDOOR = "outdoor",
  PERFORMANCE = "performance",
}
export const TAG_VALUES = new Set(Object.values(PostTag));

/**
 * @returns The slug of all the available posts
 */
export function getPostSlugs(): string[] {
  return fs.readdirSync(POST_DIRECTORY);
}

/**
 * @param slug Slug of the post to retrieve
 *
 * @returns The {@link Post} structure of the post corresponding to the given
 * slug.
 */
export async function getPostBySlug(slug: string): Promise<Post> {
  // Launch the cover building before waiting the fs to read in order to
  // parallelize the computing
  const coverPromise = _buildCoverProps(slug);

  const indexMdxPath = join(POST_DIRECTORY, slug, "index.mdx");
  const fileContents = fs.readFileSync(indexMdxPath, "utf8");
  const { data, content } = matter(fileContents);

  // Ensure the sanity of the metadata. We prefer to raise an exception here
  // because a post's metadata should always be well construct
  try {
    _assertMetadataSanity(data);
  } catch (error) {
    throw new Error(`error parsing ${slug}'s metadata: ${error}`);
  }

  const ogURL = new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/og`);
  ogURL.searchParams.append("post_slug", slug);
  ogURL.searchParams.append("post_title", data.title);

  return {
    slug,
    content,
    metadata: data,
    cover: await coverPromise,
    ogImageURL: ogURL.href,
  };
}

export async function getPostsMatching(
  predicate: (p: Post) => boolean
): Promise<Array<Post>> {
  const postsSlug = getPostSlugs();
  const out: Array<Post> = [];

  await Promise.all(
    postsSlug.map(async (slug) => {
      const p = await getPostBySlug(slug);
      if (predicate(p)) {
        out.push(p);
      }

      return p;
    })
  );

  return out;
}

/**
 * Asserts that {@link data} is a valid {@link PostMetadata}
 *
 * @param data Object to assert
 */
export function _assertMetadataSanity(
  data: Readonly<Record<string, unknown>>
): asserts data is PostMetadata {
  const MANDATORY_FIELDS = ["releaseDate", "title", "tags"] as const;

  /** Check that there is no missing mandatory field */
  const missingField = MANDATORY_FIELDS.find((field) => !(field in data));
  if (missingField) {
    throw Error(`missing the mandatory field "${missingField}"`);
  }

  /** Check the release date value and put it back as a {@link Date} object */
  const releaseDate = new Date(data["releaseDate"] as string);
  if (isNaN(releaseDate.getDate())) {
    throw Error("releaseDate value is not a valid yyyy-mm-dd date");
  }

  /** Ensure that the category is valid */
  if (typeof data["category"] !== "string") {
    throw Error("category is not a valid string");
  }
  const badCategory = !CATEGORY_VALUES.has(data["category"] as PostCategory);
  if (badCategory) {
    throw Error(`unknown category "${badCategory}"`);
  }

  /** Ensure that all the values in the tags are valid */
  if (!Array.isArray(data["tags"])) {
    throw Error("tags are not a valid array");
  }
  const badTag = data["tags"].find((tag) => !TAG_VALUES.has(tag));
  if (badTag) {
    throw Error(`unknown tag "${badTag}"`);
  }
}

/**
 * @returns the relative URL permitting to retrieve a post's cover image
 *
 * @see [the doc](../doc/posts.md) to understand how this URL is computed.
 */
export function postCoverUrl(slug: string): string {
  return `/assets/blog/posts/${slug}/cover.webp`;
}

/**
 * Builds the props to pass to the Image component when rendering the
 * cover.
 *
 * @param slug slug of the post
 */
async function _buildCoverProps(slug: string): Promise<CoverProps> {
  const srcURL = postCoverUrl(slug);
  const plaiceholder = await getPlaiceholder(srcURL);

  return {
    srcURL,
    imageProps: {
      ...plaiceholder.img,
      placeholder: "blur",
      blurDataURL: plaiceholder.base64,
    },
  };
}

/**
 * This file exposes the API to retrieve and read the available blog posts.
 * The structure of a post and how to handle them is described in
 * [this doc](../doc/posts.md)
 */

import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

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
};

export type PostMetadata = {
  /** Date at which the post was released in the format yyyy-mm-dd */
  releaseDate: string;

  /** Displayed title of the post */
  title: string;

  /** List of the tags used to qualify a post */
  tags: PostTag[];

  /**
   * Post's description displayed to the user. Undefined if not given in the
   * index.mdx metadata.
   */
  description?: string;
};

/** Valid value as a {@link Post}'s tag */
export enum PostTag {
  ENGINEERING = "engineering",
  EXCURSIONS = "excursions",
  THOUGHTS = "thoughts",
}
const TAG_VALUES = new Set(Object.values(PostTag));

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
export function getPostBySlug(slug: string): Post {
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

  return { slug, content, metadata: data };
}

export function getPostsMatching(predicate: (p: Post) => boolean): Array<Post> {
  const postsSlug = getPostSlugs();
  const out: Array<Post> = [];

  for (const slug of postsSlug) {
    const p = getPostBySlug(slug);
    if (predicate(p)) {
      out.push(p);
    }
  }

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

  /** Ensure that all the values in the tags are valid */
  if (!Array.isArray(data["tags"])) {
    throw Error("tags are not a valid array");
  }
  const badTag = data["tags"].find((tag) => !TAG_VALUES.has(tag));
  if (badTag) {
    throw Error(`unknown tag "${badTag}"`);
  }
}

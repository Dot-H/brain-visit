import * as post from "../posts";

test("getPostSlugs", () => {
  const slugs = post.getPostSlugs();
  expect(slugs).toEqual(["another-post", "sql-to-json"]);
});

describe("getPostBySlug", () => {
  test("sql-to-json", () => {
    const tested = post.getPostBySlug("sql-to-json");
    expect(tested).toEqual({
      slug: "sql-to-json",
      content: `
# sql-to-json content
`,
      metadata: {
        releaseDate: "2021-03-22",
        title: "Optimisation de conversion SQL vers JSON",
        category: post.PostCategory.ENGINEERING,
        tags: ["performance", "golang"],
      },
    } as post.Post);
  });

  test("another-post", () => {
    const tested = post.getPostBySlug("another-post");
    expect(tested).toEqual({
      slug: "another-post",
      content: `
# another-post content
`,
      metadata: {
        description: "This post has a description",
        releaseDate: "2022-01-01",
        title: "Another post",
        category: post.PostCategory.EXCURSIONS,
        tags: [post.PostTag.CLIMBING, post.PostTag.OUTDOOR],
      },
    } as post.Post);
  });
});

describe("_assertMetadataSanity", () => {
  const validMetadata: Readonly<post.PostMetadata> = {
    releaseDate: "2022-02-02",
    title: "test",
    category: post.PostCategory.EXCURSIONS,
    tags: [post.PostTag.CLIMBING, post.PostTag.OUTDOOR],
    description: "This is a description",
  };

  const MANDATORY_FIELDS = ["releaseDate", "title", "tags"] as const;

  for (const field of MANDATORY_FIELDS) {
    test(`missing "${field}" field`, () => {
      const badMetadata = { ...validMetadata };
      delete badMetadata[field];

      expect(() => post._assertMetadataSanity(badMetadata)).toThrowError(
        new Error(`missing the mandatory field "${field}"`)
      );
    });
  }

  test(`bad format of "releaseDate" throws`, () => {
    const rawMetadata: Record<string, unknown> = { ...validMetadata };
    rawMetadata.releaseDate = "2022-13-09";

    expect(() => post._assertMetadataSanity(rawMetadata)).toThrowError(
      new Error("releaseDate value is not a valid yyyy-mm-dd date")
    );
  });

  test(`"releaseDate" field is formated`, () => {
    const rawMetadata: Record<string, unknown> = { ...validMetadata };
    rawMetadata.releaseDate = "2022-09-13";

    post._assertMetadataSanity(rawMetadata);
    expect(rawMetadata["releaseDate"]).toEqual("2022-09-13");
  });
});

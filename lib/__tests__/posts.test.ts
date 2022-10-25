import * as post from "../posts";

test("getPostSlugs", () => {
  const slugs = post.getPostSlugs();
  expect(slugs).toEqual(["aiguilles-rouges", "sql-to-json"]);
});

describe("getPostBySlug", () => {
  test("sql-to-json", async () => {
    const tested = await post.getPostBySlug("sql-to-json");
    expect(tested).toEqual({
      slug: "sql-to-json",
      content: `
# sql-to-json content
`,
      cover: {
        imageProps: {
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nAE0AMv/AP///19ycUFmYvr6+gCzt7YAVEwAU02LmJYAAAsKmqmmipqXABkYAO3s7d7o5+bm5uLi4q+sHAX38/QCAAAAAElFTkSuQmCC",
          height: 512,
          placeholder: "blur",
          src: "/assets/blog/posts/sql-to-json/cover.webp",
          type: "webp",
          width: 512,
        },
        srcURL: "/assets/blog/posts/sql-to-json/cover.webp",
      },
      metadata: {
        releaseDate: "2021-03-22",
        title: "Optimisation de conversion SQL vers JSON",
        category: post.PostCategory.ENGINEERING,
        tags: ["performance", "golang"],
      },
    } as post.Post);
  });

  test("aiguilles-rouges", async () => {
    const tested = await post.getPostBySlug("aiguilles-rouges");
    expect(tested).toEqual({
      slug: "aiguilles-rouges",
      content: `
# aiguilles-rouges content
`,
      cover: {
        imageProps: {
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGM4tzj389Hu/09W/P++m4GPidfNzCjKxSbR243BUF3d29khwN0lxM2WQVlRIzPIMcrDMczNDgBEFRIZPOLUnwAAAABJRU5ErkJggg==",
          height: 1631,
          placeholder: "blur",
          src: "/assets/blog/posts/aiguilles-rouges/cover.webp",
          type: "webp",
          width: 1631,
        },
        srcURL: "/assets/blog/posts/aiguilles-rouges/cover.webp",
      },
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

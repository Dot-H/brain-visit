All the posts of the blog are presents in the [/content/posts/\*](../content/posts/)
folder.

# Post structure

A post is represented by a folder. The name of the folder gives the post's slug.

```
--content
----posts
------[slug]
--------index.mdx
--------cover.webp
--------assets
----------(...optional_imports)
```

- **index.mdx**: Post content as a markdown file with the support of react components
- **cover.webp**: Cover of the post. This is shown in the post's card and at the top of
  the post content
- **assets**: Optional folder with all the assets used as imports in the `index.mdx` file. The files in it may be images, text files, code snippets...

# `index.mdx` metadata

In this section we will describe the mandatory and optional metadata present at
the top of the `index.mdx` file.

| Name            | Description                                                                                                                                     | Mandatory | Default value                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------- |
| **releaseDate** | Release date of the post in the format **yyyy-mm-dd**                                                                                           | **true**  | _Mandatory_                             |
| **title**       | Title of the post                                                                                                                               | **true**  | _Mandatory_                             |
| **Category**    | Category used for the post. Valid value is **engineering**, **excursions**                                                                      | **true**  | _Mandatory_                             |
| **Tags**        | List of the tags used for the post. Valid values are **performance**, **golang**, **design**, **devops**, **climbing**, **outdoor**, **hiking** | **true**  | _Mandatory_                             |
| **Description** | Description of the article, must be at much **TO DEFINE** letters                                                                               | **false** | **TO DEFINE** first letters of the post |

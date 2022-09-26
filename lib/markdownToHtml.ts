import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import remarkVscode from "gatsby-remark-vscode";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(remarkVscode.remarkPlugin, {
      theme: "Default Dark+",
    })
    .use(prism)
    .process(markdown);
  return result.toString();
}

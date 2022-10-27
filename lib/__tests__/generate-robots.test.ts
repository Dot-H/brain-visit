import fs from "fs";
import path from "path";

test("robots.tsx is generated in public directory", () => {
  require("scripts/generate-robots");

  const robotsTxtPath = path.join(process.cwd(), "public", "robots.txt");
  const content = fs.readFileSync(robotsTxtPath).toString();
  expect(content).toEqual(`User-agent: *
Allow: /

Sitemap: http://localhost:3000/robots.txt
`);
});

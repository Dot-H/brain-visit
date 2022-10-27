const fs = require("fs")
const path = require("path")

async function generateRobots() {
  fs.writeFileSync(
    "public/robots.txt",
    `User-agent: *
Allow: /

Sitemap: ${process.env.WEBSITE_URL}/robots.txt
`
  );
}

generateRobots();

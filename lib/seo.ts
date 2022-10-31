// Types
import type { WithContext, WebSite, BlogPosting } from "schema-dts";

export type Query = {
  site: {
    buildTime: string;
    siteMetadata: SiteMetadata;
  };
};

export type JSONLDProps = {
  seo: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  buildTime: Query["site"]["buildTime"];
} & SiteMetadata &
  WebSite;

export type SiteMetadata = {
  defaultTitle: string;
  titleAlt: string;
  shortName: string;
  author: string;
  siteLanguage: string;
  logo: string;
  siteUrl: string;
  pathPrefix: string;
  defaultDescription: string;
  defaultBannerURL: string;
  twitter: string;
};

export function WebsiteJSONLD({
  seo,
  ...md
}: Omit<JSONLDProps, "@type">): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": md.siteUrl,
    url: seo.url,
    name: seo.title,
    alternateName: md.titleAlt || "",
    author: md.author,
    dateCreated: md.dateCreated,
    datePublished: md.datePublished,
  };
}

export function BlogPostingJSONLD({
  seo,
  titleAlt,
  buildTime,
  author,
  siteUrl,
  pathPrefix,
  logo,
}: Omit<JSONLDProps, "@type" | "@context">): WithContext<BlogPosting> {
  const realPrefix = pathPrefix === "/" ? "" : pathPrefix;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": seo.url,
    url: seo.url,
    name: seo.title,
    alternateName: titleAlt || "",
    headline: seo.title,
    image: {
      "@type": "ImageObject",
      url: seo.image,
    },
    description: seo.description,
    datePublished: buildTime,
    dateModified: buildTime,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: author,
      logo: {
        "@type": "ImageObject",
        url: siteUrl + realPrefix + logo,
      },
    },
    isPartOf: siteUrl,
    mainEntityOfPage: {
      "@type": "WebSite",
      "@id": siteUrl,
    },
  };
}

export const DEFAULT_SITE_METADATA: Readonly<SiteMetadata> = {
  defaultTitle: "Alexandre Bernard's website",
  titleAlt: "Alexandre Bernard's website",
  shortName: "Alb's website",
  author: "Alexandre Bernard",
  siteLanguage: "en",
  logo: "favicon/favicon-32x32.png",
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL + "/", // url + pathPrefix
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  defaultDescription:
    "Hi, I'm Alexandre BERNARD a developer, wannabe mountainer and curious minded guy. Come and learn more about my work and excursions",
  defaultBannerURL: "https://my-og-img.vercel.app/api/og",
  twitter: "@AIex_Bernard",
} as const;

// Components
import Head from "next/head";

// Lib
import * as seo from "lib/seo";

export type MetaProps = Pick<seo.JSONLDProps, "buildTime" | "seo"> &
  (WebSitePageProps | BlogPostProps);

type WebSitePageProps = {
  type: "WebSite";
};

type BlogPostProps = {
  type: "BlogPosting";
};

const Meta = (props: MetaProps) => {
  const schemaOrgJSONLD =
    props.type === "WebSite"
      ? [
          seo.WebsiteJSONLD({
            seo: props.seo,
            buildTime: props.buildTime,
            ...seo.DEFAULT_SITE_METADATA,
          }),
        ]
      : [
          seo.BlogPostingJSONLD({
            seo: props.seo,
            buildTime: props.buildTime,
            ...seo.DEFAULT_SITE_METADATA,
          }),
        ];

  return (
    <Head>
      {/** Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

      {/** Title & Description */}
      <meta name="image" content={props.seo.image} />
      <meta
        name="apple-mobile-web-app-title"
        content={seo.DEFAULT_SITE_METADATA.shortName}
      />
      <meta
        name="application-name"
        content={seo.DEFAULT_SITE_METADATA.shortName}
      />
      <meta name="title" content={props.seo.title} />
      <meta name="description" content={props.seo.description} />
      <meta name="author" content={seo.DEFAULT_SITE_METADATA.author} />

      {/** Theme configuration */}
      <meta name="theme-color" content="#000" />

      {/** Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph  */}
      <meta property="og:url" content={props.seo.url} />
      <meta
        property="og:type"
        content={props.type === "BlogPosting" ? "article" : "website"}
      />
      <meta property="og:title" content={props.seo.title} />
      <meta property="og:description" content={props.seo.description} />
      <meta property="og:image" content={props.seo.image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={seo.DEFAULT_SITE_METADATA.twitter}
      />
      <meta name="twitter:site" content={seo.DEFAULT_SITE_METADATA.twitter} />
      <meta name="twitter:title" content={props.seo.title} />
      <meta name="twitter:description" content={props.seo.description} />
      <meta name="twitter:image" content={props.seo.image} />
    </Head>
  );
};

export default Meta;

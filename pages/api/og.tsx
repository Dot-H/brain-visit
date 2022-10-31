import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const post_slug = searchParams.get("post_slug");
  const post_title = searchParams.get("post_title");

  if (!post_slug || !post_title) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            color: "#fff",
            background: "#103448",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          <svg
            height="256px"
            width="256px"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 70"
          >
            <g>
              <path d="M62.123,42.763,49.471,28.392h0l-.015-.017a3.8,3.8,0,0,1-.137-.109l-.009,0a.477.477,0,0,0-.133-.041.425.425,0,0,0-.051-.014.494.494,0,0,0-.3.075.442.442,0,0,0-.061.032h0L44.441,31.8,34.725,20.58c-.011-.012-.026-.015-.037-.026a.471.471,0,0,0-.129-.091.493.493,0,0,0-.064-.024.618.618,0,0,0-.072-.026.6.6,0,0,0-.073,0c-.018,0-.033-.009-.051-.008s-.024.011-.037.013a.531.531,0,0,0-.116.04.5.5,0,0,0-.084.04.493.493,0,0,0-.142.149l-.007.007L28.784,29.58H25.806a.5.5,0,0,0-.348.14l-4.5,4.339-5.071-2.59c-.009-.005-.018,0-.027-.005a.485.485,0,0,0-.252-.046c-.007,0-.014,0-.022.006a.466.466,0,0,0-.156.046.434.434,0,0,0-.058.046c-.01.007-.023.006-.033.014L1.931,42.709a.5.5,0,0,0,.641.768L15.5,32.7l2.34,4.532-.5,5.069a.5.5,0,0,0,.5.549.5.5,0,0,0,.372-.165l7.89-8.755,2.876,5.443a.539.539,0,0,0,.458.267.5.5,0,0,0,.44-.3l3.21-7.137a.479.479,0,0,0,.038-.129L34.675,22.05l8.984,10.37-5.667,4.491a.5.5,0,0,0,.311.892.491.491,0,0,0,.31-.109l6.076-4.815h0l2.764-2.224-3.215,5.933-9.208,4.8a.5.5,0,0,0,.232.943.493.493,0,0,0,.231-.057L44.84,37.4a.5.5,0,0,0,.208-.2l4.13-7.624,12.2,13.85a.5.5,0,1,0,.75-.66ZM32.144,31.856,29.381,38l-2.732-5.171a.5.5,0,0,0-.814-.1l-7.35,8.156.366-3.7A.509.509,0,0,0,18.8,36.9l-1.98-3.834,4,2.044a.5.5,0,0,0,.575-.085l4.612-4.446h3.066a.5.5,0,0,0,.434-.251l3.934-6.843Z" />
            </g>
          </svg>
          <h1 style={{ fontSize: 36, marginTop: -48 }}>
            Alexandre Bernard&apos;s website
          </h1>
        </div>
      )
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          display: "flex",
          color: "#fff",
          background: "#103448",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          alignItems: "center",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={`${post_title} cover image`}
          width="40%"
          height="60%"
          src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/_next/image?url=%2Fassets%2Fblog%2Fposts%2F${post_slug}%2Fcover.webp&w=750&q=75`}
          style={{ margin: 40 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "60%",
            padding: "64px 0px",
          }}
        >
          <h1 style={{ fontSize: 36, width: "70%" }}>{post_title}</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                height="64px"
                width="64px"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 60"
              >
                <g>
                  <path
                    d="M62.123,42.763,49.471,28.392h0l-.015-.017a3.8,3.8,0,0,1-.137-.109l-.009,0a.477.477,0,0,0-.133-.041.425.425,0,0,0-.051-.014.494.494,0,0,0-.3.075.442.442,0,0,0-.061.032h0L44.441,31.8,34.725,20.58c-.011-.012-.026-.015-.037-.026a.471.471,0,0,0-.129-.091.493.493,0,0,0-.064-.024.618.618,0,0,0-.072-.026.6.6,0,0,0-.073,0c-.018,0-.033-.009-.051-.008s-.024.011-.037.013a.531.531,0,0,0-.116.04.5.5,0,0,0-.084.04.493.493,0,0,0-.142.149l-.007.007L28.784,29.58H25.806a.5.5,0,0,0-.348.14l-4.5,4.339-5.071-2.59c-.009-.005-.018,0-.027-.005a.485.485,0,0,0-.252-.046c-.007,0-.014,0-.022.006a.466.466,0,0,0-.156.046.434.434,0,0,0-.058.046c-.01.007-.023.006-.033.014L1.931,42.709a.5.5,0,0,0,.641.768L15.5,32.7l2.34,4.532-.5,5.069a.5.5,0,0,0,.5.549.5.5,0,0,0,.372-.165l7.89-8.755,2.876,5.443a.539.539,0,0,0,.458.267.5.5,0,0,0,.44-.3l3.21-7.137a.479.479,0,0,0,.038-.129L34.675,22.05l8.984,10.37-5.667,4.491a.5.5,0,0,0,.311.892.491.491,0,0,0,.31-.109l6.076-4.815h0l2.764-2.224-3.215,5.933-9.208,4.8a.5.5,0,0,0,.232.943.493.493,0,0,0,.231-.057L44.84,37.4a.5.5,0,0,0,.208-.2l4.13-7.624,12.2,13.85a.5.5,0,1,0,.75-.66ZM32.144,31.856,29.381,38l-2.732-5.171a.5.5,0,0,0-.814-.1l-7.35,8.156.366-3.7A.509.509,0,0,0,18.8,36.9l-1.98-3.834,4,2.044a.5.5,0,0,0,.575-.085l4.612-4.446h3.066a.5.5,0,0,0,.434-.251l3.934-6.843Z"
                    fill="white"
                  ></path>
                </g>
              </svg>

              <span style={{ marginLeft: 16, fontSize: 24 }}>
                Alexandre Bernard
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

// Styles
import "styles/globals.css";
import "styles/text.css";
import "styles/prose.css";
import "styles/cards.css";

// Components
import { ThemeProvider } from "next-themes";

// Types
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

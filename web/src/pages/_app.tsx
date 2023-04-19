import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../theme/themeProvider";
import Header from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

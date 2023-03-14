import Layout from "@/components/layout";
import ToggleColorMode from "@/styles/theme";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToggleColorMode>
      <CssBaseline enableColorScheme />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToggleColorMode>
  );
}

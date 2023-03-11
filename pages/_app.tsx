import ColorModeProvider from "@/styles/theme";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

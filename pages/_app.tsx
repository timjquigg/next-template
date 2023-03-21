import Layout from "@/components/layout";
import ToggleColorMode from "@/styles/theme";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";

import createEmotionCache from "@/utility/createEmotionCache";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ToggleColorMode>
        <CssBaseline enableColorScheme />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToggleColorMode>
    </CacheProvider>
  );
};

export default MyApp;

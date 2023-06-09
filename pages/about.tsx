import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { about } from "@/lib/data";

import { containerStyle, boxStyle } from "../styles/about.styles";
import Head from "next/head";

export default function About() {
  const { bodyHeight } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="About page for Nextjs website template"
        />
      </Head>
      <Grid container columns={12} sx={containerStyle}>
        <Grid lg={6} md={6} sm={6} xs={12}>
          <Box id="about" sx={boxStyle(bodyHeight)}>
            <Typography variant="h1">{about.title}</Typography>
            <Typography variant="body1">{about.description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

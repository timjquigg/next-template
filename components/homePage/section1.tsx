import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { pageOne } from "@/lib/data";

import { containerStyle, boxStyle } from "./section1.styles";

export default function Section1() {
  const { bodyHeight } = useWindowDimensions();

  return (
    <Grid container columns={12} sx={containerStyle}>
      <Grid lg={6} md={6} sm={6} xs={12}>
        <Box id="main" sx={boxStyle(bodyHeight)}>
          <Typography variant="h1">{pageOne.title}</Typography>
          <Typography variant="body1">{pageOne.details}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

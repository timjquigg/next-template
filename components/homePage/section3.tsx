import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { pageThree } from "@/lib/data";

import { containerStyle, boxStyle } from "../../styles/section3.styles";

export default function Section3() {
  const { bannerHeight, bodyHeight } = useWindowDimensions();

  return (
    <Grid container columns={12} sx={containerStyle}>
      <Grid lg={6} md={6} sm={6} xs={12}>
        <Box id="third" sx={boxStyle(bodyHeight)}>
          <Typography variant="h1">{pageThree.title}</Typography>
          <Typography variant="body1">{pageThree.details}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

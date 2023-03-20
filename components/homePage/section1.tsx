import { Box, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { pageOne } from "@/lib/data";

const containerStyle: SxProps = {
  // m: "1rem",
  p: "1rem",
};

const boxStyle = (bodyHeight: number): SxProps => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "600px",
    height: bodyHeight,
  };
};

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

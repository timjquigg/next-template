import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { about } from "@/lib/data";

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
    height: bodyHeight,
    mx: "1rem",
  };
};

export default function About() {
  const { bodyHeight } = useWindowDimensions();

  return (
    <Grid container columns={12} sx={containerStyle}>
      <Grid lg={6} md={6} sm={6} xs={12}>
        <Box id="about" sx={boxStyle(bodyHeight)}>
          <Typography variant="h1">{about.title}</Typography>
          <Typography variant="body1">{about.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

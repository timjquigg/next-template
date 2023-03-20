import { Box, Paper, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";

import Carousel from "react-material-ui-carousel";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { pageTwo } from "@/lib/data";

const containerStyle: SxProps = {
  // m: "1rem",
  p: "1rem",
};

const boxStyle = (bodyHeight: number): SxProps => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: bodyHeight,
    p: "1rem",
  };
};

const carouselStyle: SxProps = {
  width: "100%",
  mx: "auto",
  my: "1rem",
  p: "1rem",
  zIndex: 0,
  verticalAlign: "middle",
};

const paperStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  m: "auto",
  p: "1rem",
  width: "80%",
  height: "80%",
  verticalAlign: "middle",
};

export default function Section2() {
  const { bodyHeight } = useWindowDimensions();

  const carouselItems = pageTwo.carousel.map((el) => {
    return (
      <Paper elevation={10} sx={paperStyle} key={el.title}>
        <Typography variant="h3">{el.title}</Typography>
        <Typography variant="body1">{el.details}</Typography>
      </Paper>
    );
  });

  return (
    <Grid container columns={12} sx={containerStyle}>
      <Grid xs={12}>
        <Box id="second" bgcolor="primary.dark" sx={boxStyle(bodyHeight)}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h1">{pageTwo.title}</Typography>
            <Typography variant="body1" sx={{ maxWidth: "600px" }}>
              {pageTwo.details}
            </Typography>
          </Box>
          <Grid xs={10} sm={8} md={6} lg={6}>
            <Carousel
              animation="slide"
              navButtonsAlwaysVisible={true}
              sx={carouselStyle}
            >
              {carouselItems}
            </Carousel>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

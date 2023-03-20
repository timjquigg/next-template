import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Carousel from "react-material-ui-carousel";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { pageTwo } from "@/lib/data";

import {
  containerStyle,
  boxStyle,
  carouselStyle,
  paperStyle,
} from "./section2.styles";

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

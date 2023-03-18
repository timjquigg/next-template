import { Box, Paper, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { pageTwo } from "@/lib/data";

export default function Section2() {
  const { bodyHeight } = useWindowDimensions();

  const boxStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: bodyHeight,
    p: "2rem",
    mx: "auto",
    my: ".5rem",
  };

  const carouselStyle: SxProps = {
    width: "50%",
    mx: "auto",
    my: "auto",
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

  const carouselItems = pageTwo.carousel.map((el, i) => {
    return (
      <Paper elevation={10} sx={paperStyle} key={i}>
        <Typography variant="h3">{el.title}</Typography>
        <Typography variant="body1">{el.details}</Typography>
      </Paper>
    );
  });

  return (
    <Box id="second" bgcolor="primary.dark" sx={boxStyle}>
      <Typography variant="h1">{pageTwo.title}</Typography>
      <Typography variant="body1">{pageTwo.details}</Typography>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible={true}
        sx={carouselStyle}
      >
        {carouselItems}
      </Carousel>
      {/* </Paper> */}
    </Box>
  );
}

import { Box, Paper, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Section2() {
  const { bodyHeight } = useWindowDimensions();

  const boxStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: bodyHeight,
    // my: "1rem",
    p: "2rem",
    mx: "auto",
  };

  const carouselStyle: SxProps = {
    // height: "100%",
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

  const textStyle: SxProps = {
    m: "0.5rem",
    color: (theme: ThemeOptions) => theme?.palette?.text?.secondary,
  };

  return (
    <Box id="second" bgcolor="primary.dark" sx={boxStyle}>
      <Typography variant="h1" sx={textStyle}>
        Section 2
      </Typography>
      <Typography variant="body1" sx={textStyle}>
        I'm baby succulents gochujang marxism umami, exercitation officia put a
        bird on it praxis commodo ascot tbh pitchfork paleo keffiyeh drinking
        vinegar. Next level poke direct trade subway tile single-origin coffee
        mukbang, eu vexillologist narwhal. Coloring book lumbersexual 3 wolf
        moon copper mug art party. Coloring book laborum la croix, mlkshk yes
        plz voluptate +1 chillwave distillery cornhole. Jianbing grailed
        knausgaard 3 wolf moon forage.
      </Typography>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible={true}
        sx={carouselStyle}
      >
        <Paper elevation={10} sx={paperStyle}>
          <Typography variant="h2" sx={textStyle}>
            Section 2A
          </Typography>
          <Typography variant="body1" sx={textStyle}>
            I'm baby whatever twee four loko fingerstache, messenger bag lyft
            kitsch. Kale chips taxidermy brunch, yr consectetur ut sint. Ipsum
            prism eiusmod vaporware, mustache selfies direct trade. Etsy ex YOLO
            tousled gatekeep esse irure portland meh kitsch affogato dolore art
            party. In ut heirloom, post-ironic pariatur swag letterpress. Af
            truffaut yes plz vice ennui.
          </Typography>
        </Paper>
        <Paper elevation={10} sx={paperStyle}>
          <Typography variant="h2" sx={textStyle}>
            Section 2B
          </Typography>
          <Typography variant="body1" sx={textStyle}>
            Ullamco kitsch forage pork belly hella gatekeep, glossier swag in.
            Sriracha kitsch hammock incididunt keytar ramps. Affogato gentrify
            iPhone live-edge ut messenger bag subway tile iceland. Semiotics
            salvia dolore vaporware. Dolor umami crucifix, brunch ramps
            literally bitters waistcoat street art thundercats ex humblebrag.
            Occaecat offal tumblr aliquip +1, schlitz ut pork belly slow-carb
            austin fugiat.
          </Typography>
        </Paper>
        <Paper elevation={10} sx={paperStyle}>
          <Typography variant="h2" sx={textStyle}>
            Section 2C
          </Typography>
          <Typography variant="body1" sx={textStyle}>
            Jean shorts et umami normcore chillwave. Jawn man bun messenger bag
            tumeric banjo commodo lyft. Ethical hot chicken four loko drinking
            vinegar duis hammock labore, gluten-free blackbird spyplane officia.
            Mustache woke affogato normcore, gochujang put a bird on it you
            probably haven't heard of them big mood freegan bespoke nulla
            drinking vinegar. JOMO ennui selvage crucifix waistcoat.
          </Typography>
        </Paper>
      </Carousel>
      {/* </Paper> */}
    </Box>
  );
}

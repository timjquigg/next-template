import { Box, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Section2() {
  const { bodyHeight } = useWindowDimensions();

  const boxStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: bodyHeight,
    mx: "1rem",
  };

  const textStyle: SxProps = {
    color: (theme: ThemeOptions) => theme?.palette?.text?.secondary,
  };

  return (
    <Box id="second" sx={boxStyle}>
      <Typography variant="h1" sx={textStyle}>
        Second Section
      </Typography>
      <Typography variant="body1" sx={textStyle}>
        I'm baby enim hashtag meggings dolore. Fashion axe leggings pug shaman,
        lomo dolore aliqua pork belly letterpress exercitation hexagon. Fashion
        axe magna fam pinterest. Enamel pin art party blue bottle pok pok celiac
        hell of sartorial cray austin cliche jean shorts pariatur kale chips
        humblebrag. Single-origin coffee tempor activated charcoal hella viral
        enim. Prism blackbird spyplane anim raw denim chicharrones.
      </Typography>
    </Box>
  );
}

import { Box, Paper, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Section3() {
  const { bannerHeight, bodyHeight } = useWindowDimensions();

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
    <Box id="third" sx={boxStyle}>
      <Typography variant="h1" sx={textStyle}>
        Third Section
      </Typography>
      <Typography variant="body1" sx={textStyle}>
        I'm baby jOMO etsy direct trade hexagon single-origin coffee bespoke
        freegan fingerstache. Fingerstache stumptown vape next level skateboard,
        consectetur ipsum deep v minim chillwave street art +1 cloud bread venmo
        velit. Drinking vinegar freegan sed esse lyft. Jawn air plant ad dolore
        poke vape officia lomo try-hard gatekeep cupidatat keytar eiusmod. JOMO
        next level mollit marfa chartreuse. Put a bird on it vape pour-over in
        gentrify, quinoa selfies post-ironic beard fanny pack chillwave bruh.
      </Typography>
    </Box>
  );
}

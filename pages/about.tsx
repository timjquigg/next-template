import { Box, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function About() {
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
    <>
      <Box id="about" sx={boxStyle}>
        <Typography variant="h1" sx={textStyle}>
          About
        </Typography>
        <Typography variant="body1" sx={textStyle}>
          I'm baby chartreuse enim pok pok, laboris irure ramps gentrify
          pariatur chillwave. Kogi bicycle rights put a bird on it, raclette
          taiyaki copper mug aliqua selvage ugh chambray retro. Craft beer tonx
          truffaut tofu ut. Tofu proident wolf banjo yes plz fugiat kickstarter
          small batch schlitz kitsch austin try-hard brunch. Retro deep v yr
          shaman everyday carry ethical.
        </Typography>
      </Box>
    </>
  );
}

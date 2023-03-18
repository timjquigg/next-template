import { Box, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { about } from "@/lib/data";

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

  return (
    <>
      <Box id="about" sx={boxStyle}>
        <Typography variant="h1">{about.title}</Typography>
        <Typography variant="body1">{about.description}</Typography>
      </Box>
    </>
  );
}

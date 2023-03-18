import { Box, Paper, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { pageThree } from "@/lib/data";

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

  return (
    <Box id="third" sx={boxStyle}>
      <Typography variant="h1">{pageThree.title}</Typography>
      <Typography variant="body1">{pageThree.details}</Typography>
    </Box>
  );
}

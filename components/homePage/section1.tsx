import { Box, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { pageOne } from "@/lib/data";

export default function Section1() {
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
    <Box id="main" sx={boxStyle}>
      <Typography variant="h1">{pageOne.title}</Typography>
      <Typography variant="body1">{pageOne.details}</Typography>
    </Box>
  );
}

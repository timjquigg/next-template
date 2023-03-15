import { Box, Typography } from "@mui/material";
import { SxProps, ThemeOptions } from "@mui/system";
import useWindowDimensions from "@/hooks/useWindowDimensions";

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
      <Typography variant="h1">Title of Page</Typography>
      <Typography variant="body1">
        I'm baby kickstarter tbh chillwave echo park semiotics. Humblebrag venmo
        snackwave craft beer XOXO live-edge. Biodiesel vexillologist raclette
        chillwave, artisan locavore 8-bit jean shorts fixie cupping slow-carb.
        Pickled twee wayfarers brunch four dollar toast neutral milk hotel.
      </Typography>
    </Box>
  );
}

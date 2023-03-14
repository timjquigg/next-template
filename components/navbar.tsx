import {
  Box,
  Button,
  ButtonGroup,
  SxProps,
  ThemeOptions,
  Typography,
  IconButton,
  useTheme,
  Paper,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import Link from "./link";
import { useContext } from "react";
import { ColorModeContext } from "@/styles/theme";

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const bannerStyle: SxProps = {
    position: "sticky",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    width: "100%",
    maxHeight: "100px",
    p: "1rem",
    mx: "auto",
    bgcolor: (theme: ThemeOptions) => theme.palette?.primary?.main,
  };

  const titleStyle: SxProps = {
    my: "auto",
    color: (theme: ThemeOptions) => theme?.palette?.text?.primary,
    textDecoration: "none",
  };

  const menuStyle: SxProps = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    color: (theme: ThemeOptions) => theme?.palette?.text?.primary,
  };

  const buttonStyle: SxProps = {
    height: "1.5rem",
    mx: "0.5rem",
    color: (theme: ThemeOptions) => theme?.palette?.text?.primary,
  };

  return (
    <Paper id="banner" sx={bannerStyle}>
      <Typography component={Link} href="/" variant="h2" sx={titleStyle}>
        Header
      </Typography>
      <ButtonGroup sx={menuStyle}>
        <Button variant="text" component={Link} href="/about" sx={buttonStyle}>
          About
        </Button>
        <Button
          variant="text"
          component={Link}
          href="/contact"
          sx={buttonStyle}
        >
          Contact Us
        </Button>
        <Typography variant="body1" sx={menuStyle}>
          (123) 456-7890
        </Typography>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
      </ButtonGroup>
      {/* </Box> */}
    </Paper>
  );
}

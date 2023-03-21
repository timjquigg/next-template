import { MouseEvent } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  IconButton,
  useTheme,
  Paper,
  useMediaQuery,
  Theme,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { LightMode, DarkMode, Menu as MenuIcon } from "@mui/icons-material";
import Link from "../lib/link";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/styles/theme";
import { navData } from "@/lib/data";

import {
  bannerStyle,
  titleStyle,
  menuStyle,
  buttonStyle,
} from "../styles/navbar.styles";

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = navData.pages.map((page) => {
    return (
      <Button
        key={page.title + "large"}
        variant="text"
        component={Link}
        href={page.link}
        sx={buttonStyle(theme)}
      >
        {page.title}
      </Button>
    );
  });

  const smallNaveLinks = navData.pages.map((page) => {
    return (
      <MenuItem
        key={page.title + "small"}
        disableGutters
        onClick={handleClose}
        component={Link}
        href={page.link}
        sx={buttonStyle(theme)}
      >
        {page.title}
      </MenuItem>
    );
  });

  return (
    <Paper id="banner" elevation={24} sx={bannerStyle(theme)}>
      <Typography
        className="brand"
        component={Link}
        href="/"
        variant="h2"
        sx={titleStyle(theme)}
      >
        {navData.title}
      </Typography>
      {matches ? (
        <ButtonGroup sx={menuStyle}>
          {navLinks}
          <Tooltip
            title={theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
          >
            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={buttonStyle(theme)}
            >
              {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <IconButton
            onClick={colorMode.toggleColorMode}
            sx={buttonStyle(theme)}
          >
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton onClick={handleClick} sx={buttonStyle(theme)}>
            <MenuIcon />
          </IconButton>
          <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
            {smallNaveLinks}
          </Menu>
        </ButtonGroup>
      )}
    </Paper>
  );
}

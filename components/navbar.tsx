import { MouseEvent } from "react";
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
  useMediaQuery,
  Theme,
  Menu,
  MenuItem,
} from "@mui/material";
import { LightMode, DarkMode, Menu as MenuIcon } from "@mui/icons-material";
import Link from "./link";
import { SyntheticEvent, useContext, useState } from "react";
import { ColorModeContext } from "@/styles/theme";
import { navData } from "@/lib/data";

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
  zIndex: 1,
  borderRadius: "0 0 0.5rem 0.5rem",
  // borderRadius: "0",
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
  bgcolor: (theme: ThemeOptions) => theme?.palette?.primary?.main,
};

const buttonStyle: SxProps = {
  mx: "0.5rem",
  color: (theme: ThemeOptions) => theme?.palette?.text?.primary,
};

const menuItemStyle: SxProps = {
  bgcolor: (theme: ThemeOptions) => theme?.palette?.primary?.main,
};

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
        sx={buttonStyle}
      >
        {page.title}
      </Button>
    );
  });

  const smallNaveLinks = navData.pages.map((page) => {
    return (
      <MenuItem key={page.title + "small"} disableGutters sx={menuItemStyle}>
        <Button
          onClick={handleClose}
          variant="text"
          component={Link}
          href={page.link}
          sx={buttonStyle}
        >
          {page.title}
        </Button>
      </MenuItem>
    );
  });

  return (
    <Paper id="banner" elevation={24} sx={bannerStyle}>
      <Typography
        className="brand"
        component={Link}
        href="/"
        variant="h2"
        sx={titleStyle}
      >
        {navData.title}
      </Typography>
      {matches ? (
        <ButtonGroup sx={menuStyle}>
          {navLinks}
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </ButtonGroup>
      ) : (
        <>
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            // sx={{ backgroundColor: "red" }}
          >
            {smallNaveLinks}
          </Menu>
        </>
      )}
      {/* </Box> */}
    </Paper>
  );
}

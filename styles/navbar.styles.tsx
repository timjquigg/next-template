import { SxProps, Theme, ThemeOptions } from "@mui/material";
export const bannerStyle = (theme: Theme): SxProps => {
  return {
    position: "sticky",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    width: "100%",
    p: "1rem",
    mx: "auto",
    zIndex: 1,
    borderRadius: "0 0 0.5rem 0.5rem",
    bgcolor: theme.palette?.primary?.main,
  };
};

export const titleStyle = (theme: Theme): SxProps => {
  return {
    my: "auto",
    color: theme?.palette?.text?.primary,
    textDecoration: "none",
  };
};

export const menuStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  textAlign: "center",
};

export const buttonStyle = (theme: Theme): SxProps => {
  return {
    mx: "0.5rem",
    color: theme?.palette?.text?.primary,
  };
};

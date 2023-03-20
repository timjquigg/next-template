import { SxProps, ThemeOptions } from "@mui/material";

export const bannerStyle: SxProps = {
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
  bgcolor: (theme: ThemeOptions) => theme.palette?.primary?.main,
};

export const titleStyle: SxProps = {
  my: "auto",
  color: (theme: ThemeOptions) => theme?.palette?.text?.primary,
  textDecoration: "none",
};

export const menuStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  textAlign: "center",
};

export const buttonStyle: SxProps = {
  mx: "0.5rem",
  color: (theme: ThemeOptions) => theme?.palette?.text?.primary,
};

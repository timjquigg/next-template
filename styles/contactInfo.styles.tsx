import { SxProps } from "@mui/material";

export const gridStyle = (bodyHeight: number): SxProps => {
  return {
    display: "flex",
    justifyContent: "center",
    p: 0,
    height: bodyHeight,
  };
};

export const boxStyle = (bodyHeight: number): SxProps => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    maxWidth: "600px",
    height: bodyHeight,
  };
};

export const listStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const socialsStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
};

export const cardStyle = (large: boolean): SxProps => {
  return {
    display: "flex",
    flexDirection: large ? "row" : "column",
    p: "1rem",
    m: 0,
    width: "100%",
  };
};

export const imageStyle = (
  contactCardHeight: number,
  small: boolean,
  medium: boolean,
  large: boolean,
  xLarge: boolean
) => {
  let diameter = contactCardHeight / 3;

  if (medium) {
    diameter = contactCardHeight / 2.5;
  }

  if (large) {
    diameter = contactCardHeight / 2;
  }

  if (xLarge) {
    diameter = contactCardHeight / 1.5;
  }
  return {
    height: diameter,
    width: diameter,
    styles: { margin: "auto", borderRadius: "50%" },
  };
};

export const listIconStyle: SxProps = { minWidth: 0, mr: "1rem" };

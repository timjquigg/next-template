import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  // m: "1rem",
  p: "1rem",
};

export const boxStyle = (bodyHeight: number): SxProps => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: bodyHeight,
    p: "1rem",
  };
};

export const carouselStyle: SxProps = {
  width: "100%",
  mx: "auto",
  my: "1rem",
  p: "1rem",
  zIndex: 0,
  verticalAlign: "middle",
};

export const paperStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  m: "auto",
  p: "1rem",
  width: "80%",
  height: "80%",
  verticalAlign: "middle",
};

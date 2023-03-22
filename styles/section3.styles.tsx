import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  // m: "1rem",
  p: "1rem",
  my: "1rem",
};

export const boxStyle = (bodyHeight: number): SxProps => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "600px",
    height: bodyHeight,
  };
};

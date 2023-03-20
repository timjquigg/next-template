import { SxProps } from "@mui/material";

export const containerStyle = (bodyHeight: number, large: boolean): SxProps => {
  return {
    overflow: large ? "hidden" : "",
    py: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    height: bodyHeight,
    // border: "solid red",
  };
};

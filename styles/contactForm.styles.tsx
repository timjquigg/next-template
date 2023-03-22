import { SxProps } from "@mui/material";
import { ThemeOptions } from "@mui/system";

export const gridStyle = (bodyHeight: number): SxProps => {
  return {
    display: "flex",
    justifyContent: "center",
    p: 0,
  };
};

export const boxStyle = (bodyHeight: number, large: boolean): SxProps => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: large ? "center" : "flex-start",
    width: "100%",
    maxWidth: "600px",
    height: bodyHeight,
  };
};

export const formStyle: SxProps = {
  width: "100%",
  m: "0",
  p: "1rem",
  textAlign: "center",
};

export const textFieldStyle: SxProps = {
  mx: "0",
  p: "0.5rem",
  color: (theme: ThemeOptions) => theme?.palette?.secondary.main,
};

export const buttonStyle: SxProps = {
  mx: "0.5rem",
};

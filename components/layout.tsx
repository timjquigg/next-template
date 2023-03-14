import { CSSProperties, ReactNode } from "react";
import { Box, SxProps } from "@mui/system";
import Footer from "./footer";
import Navbar from "./navbar";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Paper } from "@mui/material";

type Props = {
  children?: ReactNode;
};

export default function Layout(props: Props) {
  const { bodyHeight } = useWindowDimensions();

  const boxStyle: SxProps = {
    width: "100%",
    maxWidth: "1200px",
    mx: "auto",
  };

  const mainStyle: CSSProperties = {
    height: bodyHeight,
  };

  return (
    <Box sx={boxStyle}>
      <Navbar />
      <Paper>{props.children}</Paper>
      <Footer />
    </Box>
  );
}

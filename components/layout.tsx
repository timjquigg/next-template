import { ReactNode } from "react";
import { Box } from "@mui/system";
import Footer from "./footer";
import Navbar from "./navbar";

import { boxStyle } from "../styles/layout.styles";

type Props = {
  children?: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Box sx={boxStyle}>
      <Navbar />
      <Box>{props.children}</Box>
      <Footer />
    </Box>
  );
}

import { ReactNode } from "react";
import { Box } from "@mui/system";
// import Footer from "./footer";
import Navbar from "./navbar";

import { boxStyle } from "../styles/layout.styles";

type Props = {
  children?: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      {/* This allows for the layout to be consist regardless if there is scrollable content */}
      <style jsx global>
        {`
          html {
            width: 100vw;
            overflow-x: hidden;
          }
        `}
      </style>
      <Box sx={boxStyle}>
        <Navbar />
        <Box>{props.children}</Box>
        {/* <Footer /> */}
      </Box>
    </>
  );
}

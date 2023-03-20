import { Box, useMediaQuery, Theme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SxProps } from "@mui/system";
import ContactForm from "@/components/contact/contactForm";
import ContactInfo from "./contactInfo";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const containerStyle = (bodyHeight: number, large: boolean): SxProps => {
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

export default function ContactPage() {
  const { bodyHeight } = useWindowDimensions();
  const large = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Grid container columns={12} sx={containerStyle(bodyHeight, large)}>
      <ContactInfo lg={6} md={6} sm={12} xs={12} />
      <ContactForm lg={6} md={6} sm={12} xs={12} />
    </Grid>
  );
}

import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SxProps } from "@mui/system";
import ContactForm from "@/components/contact/contactForm";
import ContactInfo from "./contactInfo";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const containerStyle: SxProps = {
  // overflow: "hidden",
  p: "1rem",
};

export default function ContactPage() {
  return (
    <Grid container columns={12} sx={containerStyle}>
      <ContactInfo lg={6} md={6} sm={12} xs={12} />
      <ContactForm lg={6} md={6} sm={12} xs={12} />
    </Grid>
  );
}

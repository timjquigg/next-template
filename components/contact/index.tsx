import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SxProps } from "@mui/system";
import ContactForm from "@/components/contact/contactForm";
import ContactInfo from "./contactInfo";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function ContactPage() {
  const { bodyHeight } = useWindowDimensions();
  const containerStyle: SxProps = {
    // mt: "1rem",
    // alignItems: "baseline",
    // display: "flex",
    // flexDirection: "row",
    // justifyItems: "center",
    // alignItems: "center",
    // flexShrink: 1,
    // height: bodyHeight,
  };

  return (
    <>
      <Grid container spacing={2} columns={12} sx={containerStyle}>
        <ContactInfo lg={6} md={12} sm={12} xs={12} />
        <ContactForm lg={6} md={12} sm={12} xs={12} />
      </Grid>
    </>
  );
}

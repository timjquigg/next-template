import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SxProps } from "@mui/system";
import ContactForm from "@/components/contact/contactForm";
import ContactInfo from "./contactInfo";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function ContactPage() {
  const { bodyHeight } = useWindowDimensions();
  const containerStyle: SxProps = {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
    flexShrink: 1,
    height: bodyHeight,
  };

  return (
    <Box sx={containerStyle}>
      <Grid container spacing={2} columns={12}>
        <ContactInfo md={5} sm={6} xs={12} />
        <ContactForm md={6} sm={6} xs={12} />
      </Grid>
    </Box>
  );
}

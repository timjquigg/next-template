import { Box } from "@mui/material";
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
    flexShrink: 1,
    height: bodyHeight,
  };

  return (
    <Box sx={containerStyle}>
      <ContactInfo />
      <ContactForm />
    </Box>
  );
}

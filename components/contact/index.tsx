import { useEffect, useState } from "react";
import { useMediaQuery, Theme } from "@mui/material";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Unstable_Grid2";
const ContactForm = dynamic(() => import("./contactForm"));
const ContactInfo = dynamic(() => import("./contactInfo"));
import useWindowDimensions from "@/hooks/useWindowDimensions";

import { containerStyle } from "../../styles/index.styles";

export default function ContactPage() {
  const { bodyHeight } = useWindowDimensions();
  const large = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {loaded && (
        <Grid container columns={12} sx={containerStyle(bodyHeight, large)}>
          <ContactInfo lg={6} md={6} sm={12} xs={12} />
          <ContactForm lg={6} md={6} sm={12} xs={12} />
        </Grid>
      )}
    </>
  );
}

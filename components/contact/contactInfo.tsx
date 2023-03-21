import {
  Box,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Card,
  Avatar,
  useMediaQuery,
  Theme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Badge,
  Facebook,
  GitHub,
  LinkedIn,
  Place,
  Email,
  LocalPhone,
  Instagram,
  YouTube,
  Twitter,
} from "@mui/icons-material";
import {
  gridStyle,
  boxStyle,
  listStyle,
  socialsStyle,
  cardStyle,
  imageStyle,
  listIconStyle,
} from "../../styles/contactInfo.styles";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { contact } from "@/lib/data";

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export default function ContactInfo(props: Props) {
  const { contactCardHeight, bodyHeight } = useWindowDimensions();
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.up("xs"));
  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const large = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const xLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Grid
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      sx={gridStyle}
    >
      <Box id="contact_info" sx={boxStyle(bodyHeight)}>
        <Typography variant="h3">Contact Info</Typography>
        <Box sx={{ p: "1rem", width: "100%" }}>
          <Card id="contactCard" sx={cardStyle(large)}>
            <Avatar
              src={contact.profile}
              alt="profile image"
              sx={imageStyle(contactCardHeight, small, medium, large, xLarge)}
            />
            <Box sx={listStyle}>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon sx={listIconStyle}>
                    <Badge />
                  </ListItemIcon>
                  <Typography variant="body2">{contact.name}</Typography>
                </ListItem>
                {contact.hasOwnProperty("address1") && (
                  <ListItem disableGutters>
                    <ListItemIcon sx={listIconStyle}>
                      <Place />
                    </ListItemIcon>
                    <div>
                      <Typography variant="body2">
                        {contact.address1}
                      </Typography>
                      {contact.hasOwnProperty("address2") && (
                        <Typography variant="body2">
                          {contact.address2}
                        </Typography>
                      )}
                    </div>
                  </ListItem>
                )}
                <ListItem disableGutters>
                  <ListItemIcon sx={listIconStyle}>
                    <Email />
                  </ListItemIcon>
                  <Typography variant="body2">johndoe@example.com</Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={listIconStyle}>
                    <LocalPhone />
                  </ListItemIcon>
                  <Typography variant="body2">(123) 456-7890</Typography>
                </ListItem>
              </List>
              <ButtonGroup sx={socialsStyle}>
                {contact.hasOwnProperty("linkedIn") && (
                  <IconButton
                    onClick={() => window.open(contact.linkedIn, "_blank")}
                  >
                    <LinkedIn />
                  </IconButton>
                )}
                {contact.hasOwnProperty("facebook") && (
                  <IconButton
                    onClick={() => window.open(contact.facebook, "_blank")}
                  >
                    <Facebook />
                  </IconButton>
                )}
                {contact.hasOwnProperty("instagram") && (
                  <IconButton
                    onClick={() => window.open(contact.instagram, "_blank")}
                  >
                    <Instagram />
                  </IconButton>
                )}
                {contact.hasOwnProperty("youtube") && (
                  <IconButton
                    onClick={() => window.open(contact.youtube, "_blank")}
                  >
                    <YouTube />
                  </IconButton>
                )}
                {contact.hasOwnProperty("twitter") && (
                  <IconButton
                    onClick={() => window.open(contact.twitter, "_blank")}
                  >
                    <Twitter />
                  </IconButton>
                )}
                {contact.hasOwnProperty("github") && (
                  <IconButton
                    onClick={() => window.open(contact.github, "_blank")}
                  >
                    <GitHub />
                  </IconButton>
                )}
              </ButtonGroup>
            </Box>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
}

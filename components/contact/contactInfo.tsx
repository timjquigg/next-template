import {
  Box,
  ButtonGroup,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
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
import { SxProps, ThemeOptions } from "@mui/system";

const CONTACT = {
  name: "John Doe",
  address1: "123 Fake Street",
  address2: "Fake City, Province",
  email: "johndoe@example.com",
  phone: "(123) 456-789",
  linkedIn: "https://www.linkedin.com/in/johndoe",
  facebook: "https://www.facebook.com/johndoe",
  instagram: "https://www.instagram.com/johndoe",
  youtube: "https://www.youtube.com/johndoe",
  twitter: "https://www.twitter.com/johndoe",
  github: "https://www.github.com/johndoe",
};

export default function ContactInfo() {
  const boxStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    width: "50%",
    mx: "1rem",
  };

  return (
    <Box id="contact_info" sx={boxStyle}>
      <Typography variant="h3">Contact Info</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Badge />
          </ListItemIcon>
          <Typography variant="body2">{CONTACT.name}</Typography>
        </ListItem>
        {CONTACT.hasOwnProperty("address1") && (
          <ListItem>
            <ListItemIcon>
              <Place />
            </ListItemIcon>
            <div>
              <Typography variant="body2">{CONTACT.address1}</Typography>
              {CONTACT.hasOwnProperty("address2") && (
                <Typography variant="body2">{CONTACT.address2}</Typography>
              )}
            </div>
          </ListItem>
        )}
        <ListItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <Typography variant="body2">johndoe@example.com</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalPhone />
          </ListItemIcon>
          <Typography variant="body2">(123) 456-7890</Typography>
        </ListItem>
      </List>
      <ButtonGroup>
        {CONTACT.hasOwnProperty("linkedIn") && (
          <IconButton onClick={() => window.open(CONTACT.linkedIn, "_blank")}>
            <LinkedIn />
          </IconButton>
        )}
        {CONTACT.hasOwnProperty("facebook") && (
          <IconButton onClick={() => window.open(CONTACT.facebook, "_blank")}>
            <Facebook />
          </IconButton>
        )}
        {CONTACT.hasOwnProperty("instagram") && (
          <IconButton onClick={() => window.open(CONTACT.instagram, "_blank")}>
            <Instagram />
          </IconButton>
        )}
        {CONTACT.hasOwnProperty("youtube") && (
          <IconButton onClick={() => window.open(CONTACT.youtube, "_blank")}>
            <YouTube />
          </IconButton>
        )}
        {CONTACT.hasOwnProperty("twitter") && (
          <IconButton onClick={() => window.open(CONTACT.twitter, "_blank")}>
            <Twitter />
          </IconButton>
        )}
        {CONTACT.hasOwnProperty("github") && (
          <IconButton onClick={() => window.open(CONTACT.github, "_blank")}>
            <GitHub />
          </IconButton>
        )}
      </ButtonGroup>
    </Box>
  );
}

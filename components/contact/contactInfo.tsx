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
import { SxProps } from "@mui/system";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { contact } from "@/lib/data";

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const boxStyle: SxProps = {
  display: "flex",
  maxWidth: "600",
  flexDirection: "column",
  alignItems: "center",
  m: "1rem",
};

const listStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const socialsStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const cardStyle = (large: boolean): SxProps => {
  return {
    display: "flex",
    flexDirection: large ? "row" : "column",
    p: "1rem",
  };
};

const imageStyle = (height: number): SxProps => {
  return {
    m: "auto",
    minWidth: height / 4,
    minHeight: height / 4,
    maxWidth: height / 2,
    maxHeight: height / 2,
  };
};

export default function ContactInfo(props: Props) {
  const { contactCardHeight, bodyHeight } = useWindowDimensions();
  console.log(contactCardHeight);
  const large = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <Grid xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl}>
      <Box id="contact_info" sx={boxStyle}>
        <Typography variant="h3">Contact Info</Typography>
        <Card id="contactCard" sx={cardStyle(large)}>
          <Avatar
            src={contact.profile}
            alt="profile image"
            sx={imageStyle(contactCardHeight)}
          />
          <Box sx={listStyle}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Badge />
                </ListItemIcon>
                <Typography variant="body2">{contact.name}</Typography>
              </ListItem>
              {contact.hasOwnProperty("address1") && (
                <ListItem>
                  <ListItemIcon>
                    <Place />
                  </ListItemIcon>
                  <div>
                    <Typography variant="body2">{contact.address1}</Typography>
                    {contact.hasOwnProperty("address2") && (
                      <Typography variant="body2">
                        {contact.address2}
                      </Typography>
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
    </Grid>
  );
}

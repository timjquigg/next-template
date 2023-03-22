import {
  TextField,
  Button,
  ButtonGroup,
  Typography,
  Box,
  useMediaQuery,
  Theme,
  Snackbar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useWindowDimensions from "@/hooks/useWindowDimensions";

import {
  gridStyle,
  boxStyle,
  formStyle,
  textFieldStyle,
  buttonStyle,
} from "../../styles/contactForm.styles";
import useContactFormData from "@/hooks/useContactFormData";

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export default function ContactForm(props: Props) {
  const { bodyHeight } = useWindowDimensions();
  const large = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const {
    email,
    subject,
    body,
    emailError,
    subjectError,
    bodyError,
    open,
    message,
    onEmailChange,
    onSubjectChange,
    onBodyChange,
    handleSubmit,
    handleCancel,
    handleClose,
  } = useContactFormData();

  return (
    <Grid
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      sx={gridStyle(bodyHeight)}
    >
      <Box id="email_us" sx={boxStyle(bodyHeight, large)}>
        <Typography variant="h3">E-mail Us</Typography>
        <Box sx={formStyle}>
          <TextField
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            variant="outlined"
            fullWidth
            // autoFocus
            error={emailError.length > 1}
            helperText={emailError}
            label="Email"
            type="email"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
            sx={textFieldStyle}
          />
          <TextField
            value={subject}
            onChange={(e) => onSubjectChange(e.target.value)}
            variant="outlined"
            fullWidth
            error={subjectError.length > 1}
            helperText={subjectError}
            label="subject"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
            sx={textFieldStyle}
          />
          <TextField
            value={body}
            onChange={(e) => onBodyChange(e.target.value)}
            variant="outlined"
            multiline
            fullWidth
            minRows={3}
            error={bodyError.length > 1}
            helperText={bodyError}
            label="Message"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
            sx={textFieldStyle}
          />
          <ButtonGroup>
            <Button
              aria-label="Clear"
              variant="contained"
              onClick={handleCancel}
              sx={buttonStyle}
            >
              Clear
            </Button>
            <Button
              aria-label="Submit"
              variant="contained"
              onClick={handleSubmit}
              sx={buttonStyle}
            >
              Submit
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </Grid>
  );
}

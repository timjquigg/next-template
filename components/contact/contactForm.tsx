import {
  Box,
  Paper,
  SxProps,
  TextField,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useWindowDimensions from "@/hooks/useWindowDimensions";

import { ThemeOptions } from "@mui/system";
import { useState } from "react";

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const gridStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const boxStyle = (bodyHeight: number): SxProps => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "600px",
    height: bodyHeight,
  };
};

const formStyle: SxProps = {
  width: "100%",
  m: "0",
  p: "1rem",
  textAlign: "center",
  // bgcolor: (theme: ThemeOptions) => theme?.palette?.primary.main,
};

const textFieldStyle: SxProps = {
  mx: "0",
  // my: "0.5rem",
  p: "0.5rem",
  color: (theme: ThemeOptions) => theme?.palette?.secondary.main,
};

const buttonStyle: SxProps = {
  mx: "0.5rem",
};

export default function ContactForm(props: Props) {
  const { bodyHeight } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [subjectError, setSubjectError] = useState(" ");
  const [bodyError, setBodyError] = useState(" ");

  const onEmailChange = (value: string) => {
    setEmail(value);
    setEmailError("");
  };

  const onSubjectChange = (value: string) => {
    setSubject(value);
    setSubjectError("");
  };

  const onBodyChange = (value: string) => {
    setBody(value);
    setBodyError("");
  };

  const handleSubmit = () => {
    let errors = false;
    if (email.length === 0) {
      errors = true;
      setEmailError("Email is required");
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors = true;
      setEmailError("Please enter valid e-mail address");
    }

    if (subject.length === 0) {
      errors = true;
      setSubjectError("Subject is required");
    }
    if (body.length === 0) {
      errors = true;
      setBodyError("Please enter in a message for your email");
    }
    if (!errors) {
      // Send to API route for e-mailing
      handleCancel();
    }
  };

  const handleCancel = () => {
    setEmail("");
    setSubject("");
    setBody("");
    setEmailError(" ");
    setSubjectError(" ");
    setBodyError(" ");
  };

  return (
    <Grid
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      sx={gridStyle}
    >
      <Box id="email_us" sx={boxStyle(bodyHeight)}>
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
            <Button variant="contained" onClick={handleCancel} sx={buttonStyle}>
              Clear
            </Button>
            <Button variant="contained" onClick={handleSubmit} sx={buttonStyle}>
              Submit
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Grid>
  );
}

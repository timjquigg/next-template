import {
  Box,
  Paper,
  SxProps,
  TextField,
  Button,
  ButtonGroup,
} from "@mui/material";
import { ThemeOptions } from "@mui/system";
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const boxStyle: SxProps = {
    width: "100%",
    m: "0",
    p: "1rem",
    textAlign: "center",
    // bgcolor: (theme: ThemeOptions) => theme?.palette?.primary.main,
  };

  const textFieldStyle: SxProps = {
    mx: "0",
    my: "0.5rem",
    p: "0.5rem",
    color: (theme: ThemeOptions) => theme?.palette?.secondary.main,
  };

  const buttonStyle: SxProps = {
    mx: "0.5rem",
  };

  const onEmailChange = (value: string) => {
    setEmail(value);
  };

  const onSubjectChange = (value: string) => {
    setSubject(value);
  };

  const onBodyChange = (value: string) => {
    setBody(value);
  };

  const handleSubmit = () => {
    // Send to API route for e-mailing
    handleCancel();
  };

  const handleCancel = () => {
    setEmail("");
    setSubject("");
    setBody("");
  };

  return (
    <Box sx={boxStyle}>
      <TextField
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        variant="outlined"
        fullWidth
        autoFocus
        label="Email"
        type="email"
        sx={textFieldStyle}
      />
      <TextField
        variant="outlined"
        value={subject}
        onChange={(e) => onSubjectChange(e.target.value)}
        fullWidth
        label="subject"
        sx={textFieldStyle}
      />
      <TextField
        variant="outlined"
        value={body}
        onChange={(e) => onBodyChange(e.target.value)}
        multiline
        fullWidth
        minRows={3}
        label="Message"
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
  );
}

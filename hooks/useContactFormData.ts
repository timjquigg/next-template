import { useState } from "react";
import axios from "axios";

export default function useContactFormData() {
  // Data to be sent to Email API
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  // Errors to display
  const [emailError, setEmailError] = useState(" ");
  const [subjectError, setSubjectError] = useState(" ");
  const [bodyError, setBodyError] = useState(" ");
  // Confirmation dialog
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleClose = () => {
    setOpen(false);
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
      const data = { email, subject, body };
      axios
        .post("/api/email", data)
        .then((res) => {
          console.log(res);
          setMessage("Email successfully sent");
          setOpen(true);
          handleCancel();
        })
        .catch((err) => {
          setMessage("Error sending e-mail");
          setOpen(true);
        });
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

  return {
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
  };
}

import { useState } from "react";
import axios from "axios";

export default function useContactFormData() {
  // Data to be sent to Email API
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  // Errors to display
  const [nameError, setNameError] = useState(" ");
  const [emailError, setEmailError] = useState(" ");
  const [subjectError, setSubjectError] = useState(" ");
  const [bodyError, setBodyError] = useState(" ");
  // Confirmation dialog
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onNameChange = (value: string) => {
    setName(value);
    setNameError(" ");
  };

  const onEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(" ");
  };

  const onSubjectChange = (value: string) => {
    setSubject(value);
    setSubjectError(" ");
  };

  const onBodyChange = (value: string) => {
    setBody(value);
    setBodyError(" ");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let errors = false;

    if (name.length === 0) {
      errors = true;
      setNameError("Please enter your name");
    }

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
      const data = { name, email, subject, body };
      axios
        .post("/api/email", data)
        .then((res) => {
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
    setName("");
    setEmail("");
    setSubject("");
    setBody("");
    setNameError("");
    setEmailError(" ");
    setSubjectError(" ");
    setBodyError(" ");
  };

  return {
    name,
    email,
    subject,
    body,
    nameError,
    emailError,
    subjectError,
    bodyError,
    open,
    message,
    onNameChange,
    onEmailChange,
    onSubjectChange,
    onBodyChange,
    handleSubmit,
    handleCancel,
    handleClose,
  };
}

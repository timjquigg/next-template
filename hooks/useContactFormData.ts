import { useState } from "react";

export default function useContactFormData() {
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

  return {
    email,
    subject,
    body,
    emailError,
    subjectError,
    bodyError,
    onEmailChange,
    onSubjectChange,
    onBodyChange,
    handleSubmit,
    handleCancel,
  };
}

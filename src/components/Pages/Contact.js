import {
  Container,
  FormControl,
  TextField,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Snackbars from "../Contact/Snackbars";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50%",
  },
}));

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [nameValid, setNameValid] = useState(null);

  const [messageInput, setMessageInput] = useState("");
  const [messageValid, setMessageValid] = useState(null);

  const [emailInput, setEmailInput] = useState("");
  const [emailValid, setEmailValid] = useState(null);

  const [formIsValid, setFormIsValid] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const classes = useStyles();

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
    if (event.target.value.length < 5) {
      setNameValid(false);
      return;
    }
    setNameValid(true);
  };

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
    if (event.target.value.length < 15) {
      setMessageValid(false);
      return;
    }
    setMessageValid(true);
  };

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
    if (!re.test(event.target.value)) {
      setEmailValid(false);
      return;
    }
    setEmailValid(true);
  };

  useEffect(() => {
    if (emailValid && nameValid && messageValid) {
      console.log("valid form");
      setFormIsValid(true);
      return;
    }
    setFormIsValid(false);
  }, [emailValid, nameValid, messageValid]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInfoOpen(true);
    const data = {
      name: nameInput,
      message: messageInput,
      email: emailInput,
    };
    axios.post("/images/send", data).then((response) => {
      setInfoOpen(false);
      setSuccessOpen(true);
    }, (error) => {
      setInfoOpen(false);
      setErrorOpen(true);
    });
  };

  return (
    <Container className={classes.container}>
      <form onSubmit={handleFormSubmit}>
        <div>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              required
              id="name"
              label="Name"
              value={nameInput}
              onChange={handleNameChange}
              onBlur={handleNameChange}
              error={!nameValid && nameValid != null ? true : false}
              helperText={
                !nameValid && nameValid != null
                  ? "Name has to have atleast 5 chracters."
                  : ""
              }
            />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              required
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              value={messageInput}
              onChange={handleMessageChange}
              onBlur={handleMessageChange}
              error={!messageValid && messageValid != null ? true : false}
              helperText={
                !messageValid && messageValid != null
                  ? "Message has to have atleast 15 chracters."
                  : ""
              }
            />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              required
              id="email"
              label="Your email"
              type="email"
              value={emailInput}
              onChange={handleEmailChange}
              onBlur={handleEmailChange}
              error={!emailValid && emailValid != null ? true : false}
              helperText={
                !emailValid && emailValid != null ? "Invalid email." : ""
              }
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </div>
        <Button
          variant="contained"
          fullWidth={true}
          type="submit"
          disabled={!formIsValid ? true : false}
          color="primary"
        >
          Submit
        </Button>
      </form>
      <Snackbars
        errorOpen={errorOpen}
        successOpen={successOpen}
        setErrorOpen={setErrorOpen}
        setSuccessOpen={setSuccessOpen}
        setInfoOpen={setInfoOpen}
        infoOpen={infoOpen}
      />
    </Container>
  );
};

export default Contact;

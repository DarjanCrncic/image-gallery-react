import {
  Container,
  FormControl,
  TextField,
  FormHelperText,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Snackbars from "../Contact/Snackbars";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    marginTop: "5rem",
    textAlign: "center",
  },
  button: {
    marginTop: 15,
  },
  form: {
    width: "50%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
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
  const { t } = useTranslation();

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
    if (event.target.value.trim().length < 3) {
      setNameValid(false);
      return;
    }
    setNameValid(true);
  };

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
    if (event.target.value.trim().length < 10) {
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
      name: nameInput.trim(),
      message: messageInput.trim(),
      email: emailInput.trim(),
    };
    axios.post("/send", data).then(
      (response) => {
        resetAllInputs();
        setInfoOpen(false);
        setSuccessOpen(true);
      },
      (error) => {
        setInfoOpen(false);
        setErrorOpen(true);
      }
    );
  };

  const resetAllInputs = () => {
    setEmailInput("");
    setNameInput("");
    setMessageInput("");
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h3" component="h2" color="primary">
        {t("contact-title")}
      </Typography>
      <form onSubmit={handleFormSubmit} className={classes.form}>
        <div>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              required
              id="name"
              label={t("name")}
              value={nameInput}
              onChange={handleNameChange}
              onBlur={handleNameChange}
              error={!nameValid && nameValid != null ? true : false}
              helperText={
                !nameValid && nameValid != null ? t("name-restriction") : ""
              }
            />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              required
              id="message"
              label={t("message")}
              multiline
              rows={4}
              variant="outlined"
              value={messageInput}
              onChange={handleMessageChange}
              onBlur={handleMessageChange}
              error={!messageValid && messageValid != null ? true : false}
              helperText={
                !messageValid && messageValid != null
                  ? t("message-restriction")
                  : ""
              }
            />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth={true}>
            <TextField
              required
              id="email"
              label={t("email")}
              type="email"
              value={emailInput}
              onChange={handleEmailChange}
              onBlur={handleEmailChange}
              error={!emailValid && emailValid != null ? true : false}
              helperText={
                !emailValid && emailValid != null ? t("email-restriction") : ""
              }
            />
            <FormHelperText id="my-helper-text">
              {t("email-helper-text")}
            </FormHelperText>
          </FormControl>
        </div>
        <Button
          variant="contained"
          fullWidth={true}
          type="submit"
          disabled={!formIsValid ? true : false}
          color="primary"
          className={classes.button}
        >
          {t("submit")}
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

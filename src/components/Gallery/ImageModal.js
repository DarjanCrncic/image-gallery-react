import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";
import Magnifier from "react-magnifier";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexWrap: "wrap",
    fontSize: "1.2rem",
  },

  image: {
    width: "100%",
  },

  bodyImage: {
    maxWidth: 600,
    display: "inline-block",
    marginRight: "auto",
    marginLeft: "auto",
    minWidth: 200,
  },

  bodyText: {
    maxWidth: 350,
    display: "inline-block",
    marginRight: "auto",
    marginLeft: "auto",
    minWidth: 200,
  },
}));

export default function ImageModal(props) {
  const classes = useStyles();

  const body = (
    <Container className={classes.paper}>
      <div className={classes.bodyText}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className={classes.bodyImage}>
        <Magnifier
          src={props.path}
          width={"100%"}
          mgWidth={150}
          mgHeight={150}
        />
      </div>
    </Container>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

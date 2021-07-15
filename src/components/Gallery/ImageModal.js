import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

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
    fontSize: "1.3rem",
  },

  image: {
    width: "100%",
  },

  test: {
    maxWidth: 345,
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
      <div className={classes.test}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className={classes.test}>
        <img src={props.path} alt="Preview" className={classes.image}></img>
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

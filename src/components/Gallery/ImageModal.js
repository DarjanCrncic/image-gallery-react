import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: theme.shadows[5],
    border: "none",
    width: '100%'
  },
  test: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function ImageModal(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal open={props.open} onClose={props.handleClose}>
        <div className={classes.test}>
        <Fade duration={1500}>
          <img
            src={props.path}
            className={classes.paper}
            onLoad={props.handleOpen}
          />
        </Fade>
        </div>
      </Modal>
    </div>
  );
}

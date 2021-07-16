import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Magnifier from "react-magnifier";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: theme.shadows[5],
    minHeight: 0,
    border: "none",
  },
  test: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
  },
}));

export default function ImageModal(props) {
  const classes = useStyles();

  const body = (
    <div className={classes.test}>
      <Fade duration={1000}>
        <Magnifier
          src={props.path}
          //width={"60%"}
          zoomImgSrc={props.path}
          zoom={2.5}
          mgWidth={200}
          mgHeight={200}
          mgShowOverflow={false}
          className={classes.paper}
          onLoad={props.handleOpen}
          mgBorderWidth={1}
        />
      </Fade>
    </div>
  );

  return (
    <div>
      <Modal open={props.open} onClose={props.handleClose}>
        {body}
      </Modal>
    </div>
  );
}

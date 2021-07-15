import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  image: {
    width: 200
  }
  
}));

export default function ImageModal(props) {
  const classes = useStyles();
  

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">{props.title}</h2>
      <p id="simple-modal-description">
        {props.description}
      </p>
      <button onClick={props.handleClose}>Close</button>
    </div>
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

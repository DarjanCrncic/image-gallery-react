import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Snackbars = (props) => {
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setSuccessOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setErrorOpen(false);
  };

  const handleCloseInfo = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setInfoOpen(false);
  };

  return (
    <React.Fragment>
      <Snackbar
        open={props.successOpen}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          Message sent successfuly!
        </Alert>
      </Snackbar>
      <Snackbar
        open={props.errorOpen}
        autoHideDuration={3000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          Something went wrong, please try again later.
        </Alert>
      </Snackbar>
      <Snackbar
        open={props.infoOpen}
        autoHideDuration={3000}
        onClose={handleCloseInfo}
      >
        <Alert onClose={handleCloseInfo} severity="info">
          Your message is being sent!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Snackbars;

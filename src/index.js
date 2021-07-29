import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./i18n.js";
import { CircularProgress } from "@material-ui/core";
import classes from "./index.module.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress className={classes.spinner}/>}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

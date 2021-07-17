import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {introText} from './intro-text';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    minHeight: "200px",
    display: "flex",
    marginTop: 20,
    marginBottom: "5%",
    padding: 10,
    textAlign: "justify",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
    fontSize: "1.2rem",
  },
  image: {
    width: "130%",
    borderRadius: "50%",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 0px 0px -5px, rgb(0 0 0 / 14%) 0px 0px 0px 1px, rgb(0 0 0 / 12%) 0px 0px 0px 2px",
    position: "relative",
    top: "20%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  text: {
    ["@media (max-width:780px)"]: {
      width: "120%",
    },
  },
}));

const InfoContainer = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Box
        container
        component={Grid}
        className={classes.container}
        boxShadow={2}
        spacing={2}
      >
        <Grid item xs={10}>
          <Typography variant="h3" component="h2" color="primary">
            Ja sam Jadranka!
          </Typography>
          <Typography variant="body1" component="p" className={classes.text}>
            {introText}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <img
            className={classes.image}
            src="/images/woman.jpg"
            alt="preview"
          ></img>
        </Grid>
      </Box>
    </Container>
  );
};
export default InfoContainer;

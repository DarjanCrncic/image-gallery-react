import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

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
          <h1>Ja sam Jadranka!</h1>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            commodo dictum velit, id pharetra mi vestibulum nec. Donec
            ullamcorper, arcu eget commodo lobortis, eros ante dignissim dolor,
            bibendum hendrerit tellus lectus nec velit. Aliquam quis justo
            felis. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Etiam malesuada lobortis metus
            blandit aliquam. Pellentesque turpis mauris, semper eu egestas in,
            sollicitudin at sapien. Sed ultricies orci quis ipsum facilisis, non
            vehicula risus facilisis. Pellentesque quis quam justo.
          </p>
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

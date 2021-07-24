import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { introText } from "./intro-text";
import { useTranslation } from "react-i18next";

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
}));

const InfoContainer = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container>
      <Box
        container
        component={Grid}
        className={classes.container}
        boxShadow={2}
        spacing={2}
      >
        <Typography variant="h3" component="h2" color="primary">
          {t("home-title")}
        </Typography>
        <Typography variant="body1" component="p" className={classes.text}>
          {introText}
        </Typography>
      </Box>
    </Container>
  );
};
export default InfoContainer;

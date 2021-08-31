import { Grid, Container, Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Magnifier from "react-magnifier";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
    marginBottom: 40,
    background: "white",
    textAlign: "center",
  },
  textGrid: {
    textAlign: "justify",
    padding: 12,
    "& h2": {
      marginTop: 10,
    },
  },
}));

const PaintingDetails = (props) => {
  const classes = useStyles();
  const imageInfo = props.imageInfo;
  const { t } = useTranslation();

  return (
    <Container className={classes.container} fixed={true}>
      <Box container component={Grid} boxShadow={2} spacing={2}>
        <Grid item xs={12} md={4} className={classes.textGrid}>
          <Typography variant="h3" component="h2" color="primary">
            {imageInfo.title}
          </Typography>
          <Typography variant="body1" component="h2">
            {imageInfo.description}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            <strong>{t("painted-at")} </strong> {imageInfo.painted_at.substring(0,4)}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            <strong>{t("technique")} </strong> {imageInfo.technique}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Magnifier
            src={imageInfo.path_to_file}
            zoomImgSrc={imageInfo.path_to_file}
            zoom={1.5}
            mgWidth={200}
            mgHeight={200}
            mgShowOverflow={false}
            className={classes.image}
            mgBorderWidth={1}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default PaintingDetails;

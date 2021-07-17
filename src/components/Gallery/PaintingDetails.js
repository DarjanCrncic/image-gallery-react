import { Grid, Container, Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Magnifier from "react-magnifier";
import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
    background: "white",
    height: "80%",
  },
  image: {
    maxWidth: "100%",
  },
  textGrid: {
    textAlign: "justify",
    padding: 12,
    "& p": {
      fontSize: "1.1rem",
    },
  },
}));

const PaintingDetails = (props) => {
  const classes = useStyles();
  const imageInfo = props.imageInfo;
  return (
    <Container className={classes.container}>
      <Box container component={Grid} boxShadow={2} spacing={2}>
        <Grid item xs={12} sm={4} className={classes.textGrid}>
          <Typography variant="h3" component="h2" color="primary">
            {imageInfo.title}
          </Typography>
          <Typography variant="body1" component="p">
            {imageInfo.description}
          </Typography>
          <Typography variant="subtitle1" component="p">
            Oslikano: {imageInfo.painted_at}
          </Typography>
          <Typography variant="subtitle1" component="p">
            Tehnika: akvarel
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Magnifier
            src={imageInfo.path_to_file}
            zoomImgSrc={imageInfo.path_to_file}
            zoom={2.5}
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

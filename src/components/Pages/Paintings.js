import { Grid, Container, Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
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

const Paintings = (props) => {
  let { id } = useParams();
  const classes = useStyles();
  const [imageInfo, setImageInfo] = useState("");

  useEffect(() => {
    getImageInfo();
  }, []);

  const getImageInfo = async () => {
    const response = await axios.get("/images/find/" + id);
    const year = response.data.painted_at.slice(0, 4);
    const newInfo = await { ...response.data, painted_at: year + "." };
    setImageInfo(newInfo);
  };

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
          <img
            className={classes.image}
            src={imageInfo.path_to_file}
            alt="preview"
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default Paintings;

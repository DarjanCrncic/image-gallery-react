import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import MediaCard from "../Gallery/MediaCard";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex !important",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    const response = await axios.get("/images");
    setImages(response.data);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      {images.map((image) => {
        return (
          <MediaCard
            key={image.id}
            title={image.title}
            description={image.description}
            path={image.path_to_file}
            painted_at={image.painted_at}
          ></MediaCard>
        );
      })}
    </Container>
  );
};

export default Gallery;

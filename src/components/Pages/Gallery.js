import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import MediaCard from "../Gallery/MediaCard";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import ImageModal from "../Gallery/ImageModal";

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
  const [imageInfo, setImageInfo] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    const response = await axios.get("/images");
    setImages(response.data);
  };

  const handleOpen = (image) => {
    setOpen(true);
    setImageInfo(image);
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.container}>
        {images.map((image) => {
          let shortendDescription = image.description;
          if (shortendDescription.length > 50) {
            let chunks = shortendDescription.match(/.{1,80}(\s|$)/g);
            shortendDescription = chunks[0] + "...";
          }
          return (
            <MediaCard
              key={image.id}
              id={image.id}
              title={image.title}
              description={image.description}
              shortendDescription={shortendDescription}
              path={image.path_to_file}
              painted_at={image.painted_at}
              onClickInfo={handleOpen}
            ></MediaCard>
          );
        })}
      </Container>

      <ImageModal
        title={imageInfo.title}
        description={imageInfo.description}
        path={imageInfo.path}
        handleClose={handleClose}
        open={open}
      />
    </React.Fragment>
  );
};

export default Gallery;

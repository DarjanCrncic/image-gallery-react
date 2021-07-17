import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import PaintingDetails from "../Gallery/PaintingDetails";

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

const About = (props) => {
  const classes = useStyles();

  let { id } = useParams();
  const [currentSlideId, setCurrentSlideId] = useState(id);
  const [images, setImages] = useState("");

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    const response = await axios.get("/images");
    setImages(response.data);
  };

  let paintingList = [];
  if (images.length > 0) {
    paintingList = images.map((imageInfo) => {
      return <PaintingDetails imageInfo={imageInfo}></PaintingDetails>;
    });
  }

  return (
    <Carousel
      value={currentSlideId}
      onChange={value => setCurrentSlideId(value)}
      slides={paintingList}
      plugins={["arrows", "clickToChange"]}
    ></Carousel>
  );
};

export default About;

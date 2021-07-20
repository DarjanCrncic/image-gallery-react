import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "3d-react-carousal";
import InfoContainer from "../Home/InfoContainer";
import "../Home/carousel.css";
import { Suspense } from "react";

const Home = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    const response = await axios.get("/images");
    setImages(
      response.data.map((image, index) => (
        <img src={image.path_to_file} alt={index} />
      ))
    );
  };

  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  return (
    <React.Fragment>
      <InfoContainer></InfoContainer>
      <Carousel slides={slides} arrows={true} />
    </React.Fragment>
  );
};

export default Home;

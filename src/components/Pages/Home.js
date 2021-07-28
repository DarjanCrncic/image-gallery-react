import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "3d-react-carousal";
import InfoContainer from "../Home/InfoContainer";
import "../Home/carousel.css";
import { useMediaQuery } from "@material-ui/core";

const Home = (props) => {
  const media = useMediaQuery('(max-width:600px)');
  const [images, setImages] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get("/images/", {
          cancelToken: source.token,
        });
        setImages(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error);
        } else {
          throw error;
        }
      }
    };
    fetchData();
    return () => {
      source.cancel();
    };
  }, []);

  /*const slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];*/

  const slides = images.map((image) => {
    return <img src={image.path_to_file} alt="preview" style={{width: "55%"}}/>;
  });

  return (
    <React.Fragment>
      <InfoContainer></InfoContainer>
      <Carousel slides={slides} arrows={media ? false : true} />
    </React.Fragment>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PaintingDetails from "../Gallery/PaintingDetails";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../Gallery/swiper.css";
import Fade from "react-reveal/Fade";

SwiperCore.use([Navigation, Pagination]);

const Paintings = (props) => {
  let { index } = useParams();

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

  const body = images.map((imageInfo) => {
    return (
      <SwiperSlide key={imageInfo._id}>
        <PaintingDetails imageInfo={imageInfo}></PaintingDetails>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Fade duration={1500}>
        <Swiper
          navigation={true}
          pagination={true}
          autoHeight={true}
          initialSlide={+index}
        >
          {body}
        </Swiper>
      </Fade>
    </>
  );
};

export default Paintings;

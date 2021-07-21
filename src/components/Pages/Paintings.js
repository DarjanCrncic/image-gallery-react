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

SwiperCore.use([Navigation, Pagination]);

const Paintings = (props) => {

  let { index } = useParams();

  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    const response = await axios.get("/images");
    await setImages(response.data);
  };

  const body = images.map((imageInfo) => {
    return (
      <SwiperSlide key={imageInfo._id}>
        <PaintingDetails imageInfo={imageInfo}></PaintingDetails>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        autoHeight={false}
        initialSlide={+index}
        lazy={true}
      >
        {body}
      </Swiper>
    </>
  );
};

export default Paintings;

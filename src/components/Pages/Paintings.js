import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PaintingDetails from "../Gallery/PaintingDetails";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {Navigation, Pagination} from "swiper";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Navigation, Pagination]);

const useStyles = makeStyles((theme) => ({
  
}));

const Paintings = (props) => {
  const classes = useStyles();

  let { id } = useParams();

  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    const response = await axios.get("/images");
    setImages(response.data);
  };

  const body = images.map((imageInfo) => {
    return (
      <SwiperSlide key={imageInfo.id}>
        <PaintingDetails imageInfo={imageInfo}></PaintingDetails>
      </SwiperSlide>
    );
  });

  return (
    <>
    <Swiper navigation={true} pagination={true} autoHeight={false} initialSlide={+id-1}>
      {body}
    </Swiper>
    </>
  );
};

export default Paintings;

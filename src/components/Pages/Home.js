import React, { useContext } from "react";
import { Carousel } from "3d-react-carousal";
import InfoContainer from "../Home/InfoContainer";
import "../Home/carousel.css";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ImageContext from "../../store/image-context";

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "65%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "55%",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const media = useMediaQuery("(max-width:600px)");
  const ctx = useContext(ImageContext);

  /*const slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];*/

  const slides = ctx.images.map((image) => {
    return <img src={image.path_to_file} alt="preview" className={classes.image}/>;
  });

  return (
    <React.Fragment>
      <InfoContainer></InfoContainer>
      <Carousel slides={slides} arrows={media ? false : true} />
    </React.Fragment>
  );
};

export default Home;

import React from "react";
import ProgressiveImage from "react-progressive-image";

const About = () => {
  return (
    <div >
      <ProgressiveImage
        src="images/drvo.jpg"
        placeholder="images/drvo-small.jpg"
      >
        {(src) => <img style={{height: '200px'}} src={src} alt="an prop" />}
      </ProgressiveImage>
      
    </div>
  );
};

export default About;

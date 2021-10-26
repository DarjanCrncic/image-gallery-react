import React from "react";

const ImageContext = React.createContext({
  images: [],
  setImages: (data) => {}
});

export default ImageContext;
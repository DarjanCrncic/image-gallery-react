import React, { useReducer } from "react";
import ImageContext from "./image-context";

const imageReducer = (state, action) => {
  if (action.type === "SET_IMAGES") {
    if (action !== undefined && action.data !== undefined) {
      return {
        images: action.data,
      };
    }
  }
};

const ImageProvider = (props) => {
  const [imageState, dispatchImagesAction] = useReducer(imageReducer, {
    images: [],
  });

  const setImagesHandler = (data) => {
    dispatchImagesAction({ type: "SET_IMAGES", data: data });
  };

  const imageContext = {
    images: imageState.images,
    setImages: setImagesHandler,
  };

  return (
    <ImageContext.Provider value={imageContext}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;

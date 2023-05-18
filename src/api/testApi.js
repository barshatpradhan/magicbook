import React from "react";
import Axios from "axios";

const imageFunc = async (setUrl) => {
  const options = {
    method: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
  };
  try {
    console.log("aqaa");
    const response = await Axios.request(options);
    console.log(response.data);
    setUrl(response.data.message);
  } catch (error) {
    console.error(error);
  }
};

export default imageFunc;

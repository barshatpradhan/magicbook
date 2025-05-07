import React from "react";
import Axios from "axios";
import { SettingsEthernet } from "@mui/icons-material";

//export default function ImageUpload() {
// const [image, setImage] = useState("");
// function handleImage(e) {
//   console.log(e.target.files[0]);

//   setImage(e.target.files[0]);
// }

const imageFunc = async (image, setUrl, setGenerating, setError) => {
  const data = new FormData();
  data.append("image", image);
  data.append("type", "pixar");
  console.log(data);
  const options = {
    method: "POST",
    url: "https://cartoon-yourself.p.rapidapi.com/facebody/api/portrait-animation/portrait-animation",
    headers: {
      "X-RapidAPI-Key": "942bb602ecmshdfffc1d812d18a6p1efa34jsnd620d2405e11",
      "X-RapidAPI-Host": "x-rapidapi-host: cartoon-yourself.p.rapidapi.com",
    },
    data: data,
  };
  console.log``;
  try {
    const response = await Axios.request(options);
    setUrl(response.data.data.image_url);
    setGenerating(false);
  } catch (error) {
    console.log(error);
    setError(error.response.data.error_msg);
    setGenerating(false);
  }
};
export default imageFunc;

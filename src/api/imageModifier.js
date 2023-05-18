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
  data.append("type", "3d_cartoon");
  console.log(data);
  const options = {
    method: "POST",
    url: "https://cartoon-yourself.p.rapidapi.com/facebody/api/portrait-animation/portrait-animation",
    headers: {
      "X-RapidAPI-Key": "0eb3e1bbe8msh6f842f790fccdcdp16dbe0jsn61b893c42b88",
      "X-RapidAPI-Host": "cartoon-yourself.p.rapidapi.com",
    },
    data: data,
  };
  console.log``;
  try {
    console.log("aqaa");
    const response = await Axios.request(options);
    console.log(response.data);
    console.log("try");
    setUrl("https://images.dog.ceo/breeds/beagle/n02088364_11828.jpg");
  } catch (error) {
    console.log("error, please try again later...");
    setError("error, please try again later...");
    setGenerating(false);
  }
};
export default imageFunc;

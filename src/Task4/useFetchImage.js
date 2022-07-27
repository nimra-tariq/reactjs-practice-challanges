import axios from "axios";
import { useState } from "react";

const useFetchImage = () => {
  const [src, setSrc] = useState("");

  const fetchImg = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random",
      });
      setSrc(response.data.message);
      console.log(src, "src");
    } catch (error) {
      console.log(error);
    }
  };

  return { src, fetchImg };
};

export default useFetchImage;

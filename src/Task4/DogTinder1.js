import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const DogTinder = () => {
  const [source, setSource] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [leftArray, setLeftArray] = useState([]);
  const [rightArray, setRightArray] = useState([]);

  const fetchImage = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random",
      });
      return response.data.message;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getRandomDog = async () => {
      const source = await fetchImage();
      setSource(source);
    };
    getRandomDog();
  }, []);

  const fetchLeftImage = async () => {
    const source = await fetchImage();
    setLeftArray((leftArray) => [...leftArray, { src: source }]);
  };

  const fetchRightImage = async () => {
    const source = await fetchImage();
    setRightArray((rightArray) => [...rightArray, { src: source }]);
  };

  return (
    <>
      <div>
        <h1>DogTinder</h1>
        <img src={source} alt="dogImage" width="200px" height="200px" />
        <button onClick={fetchLeftImage}>Left</button>
        <button onClick={fetchRightImage}>Right</button>
      </div>
      <div>
        <button onClick={() => setShowResult(true)}>Result</button>
        {showResult ? (
          <>
            <div>
              <h2>Left Images</h2>
              <div>
                {leftArray.map(({ src }, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="dogImage"
                    width="200px"
                    height="200px"
                  />
                ))}
              </div>
            </div>
            <div>
              <h3>Right Images</h3>
              <div>
                {rightArray.map(({ src }, i) => (
                  <img
                    src={src}
                    key={i}
                    alt="dogImage"
                    width="200px"
                    height="200px"
                  />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default DogTinder;

import React from "react";
import { useState } from "react";
import useFetchImage from "./useFetchImage";
const DogTinder = () => {
  const [showResult, setShowResult] = useState(false);
  const [leftArray, setLeftArray] = useState([]);
  const [rightArray, setRightArray] = useState([]);

  const { src, fetchImg } = useFetchImage();
  console.log(src, "src");

  async function fetchLeftImage() {
    const src = await fetchImg();
    setLeftArray((leftArray) => [...leftArray, { src: src }]);
  }

  const fetchRightImage = async () => {
    const src = await fetchImg();
    setRightArray((rightArray) => [...rightArray, { src: src }]);
  };

  return (
    <>
      <div>
        <h1>DogTinder</h1>
        <img src={src} alt="dogImage" width="200px" height="200px" />
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

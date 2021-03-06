import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {box.map((value, index) => {
          return (
            <div
              className="bounding-box"
              key={index}
              style={{
                top: value.topRow,
                right: value.rightCol,
                bottom: value.bottomRow,
                left: value.leftCol
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;

import React from "react";
import "./Body.css";

const ResCard = ({ resData }) => {
  console.log("resData : ", resData);

  const {
    cloudinaryImageId,
    name,
    sla: { slaString },
    avgRating,
  } = resData;

  return (
    <>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
        <img
          className="img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/" +
            cloudinaryImageId
          }
          alt="image"
        />
        <h3></h3>
        <h4>{name}</h4>
        <h4>{avgRating}</h4>
        <h4>{slaString}</h4>
      </div>
    </>
  );
};

export default ResCard;

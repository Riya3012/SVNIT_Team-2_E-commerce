import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../images/Profile.png";
import { Button } from "@material-ui/core";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  console.log(review?.timestamp);
  return (
    <>
      <div className="reviewCard">
        <div
          className="firstdiv"
          style={{
            flexDirection: "column",
            flex: 1,
            paddingRight: "10px",
            borderRight: "1px solid #ADADAD",
          }}
        >
          <span>
            <p
              style={{
                color: "rgba(0, 0, 0, 0.636)",
                font: "600 0.9vmax Roboto",
              }}
            >
              {review?.timestamp}
            </p>
          </span>
          <div
            className="first"
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="leftdiv">
              <img src={profilePng} alt="User" />
            </div>
            <div className="rightdiv">
              <p>{review.name}</p>
              <Rating {...options} />
            </div>
          </div>
        </div>
        <div className="seconddiv" style={{ flex: 2, padding: "2vmax" }}>
          <span className="reviewCardComment">{review.comment}</span>
          {/* <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              style={{
                border: "none",
                cursor: "pointer",
                color: "white",
                transition: "all 0.5s",
                backgroundColor: "tomato",
                font: "500 0.7vmax Roboto",
                borderRadius: "20px",
                padding: "0.5vmax 2vmax",
                margin: "1vmax",
                outline: "none",
              }}
            >
              Replies
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ReviewCard;

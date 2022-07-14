import React from "react";
import "./Card.css";

function Card({ image, postType, heading, content, userPic, username }) {
  return (
    <div className="card mb-3">
      <img className="card-img-top" src={image} alt="CardIMg" />
      <div className="card-body">
        <img src={postType} alt="" className="post-type mb-2" />
        <div className="title d-flex align-items-center justify-content-between mb-2">
          <h5 className="card-title mb-0">{heading}</h5>
          <img src="/cardAssets/edit.svg" alt="edit" className="mt-0" />
        </div>
        <p className="card-text">{content}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src={userPic} alt="" className="avtar" />
            <p className="username ms-2 mb-0">{username}</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-4">
              <img
                src="/cardAssets/visibility.svg"
                alt="views"
                className="view"
              />
              <p className="views mb-0 ms-2">1.4k views</p>
            </div>
            <div className="share">
              <img src="/cardAssets/share.svg" alt="share" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

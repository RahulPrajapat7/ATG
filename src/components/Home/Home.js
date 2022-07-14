import React from "react";
import homeBg from "../../Assets/homeBg.svg";
import "./Home.css";
import Card from "../Card/Card";
import downArrow from "../../Assets/downArrow.svg";

function Home() {
  return (
    <div>
      <div className="bgContainer">
        <img className="homeBg" src={homeBg} alt="background" />
        <div>
          <h3>Computer Engineering</h3>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className="container">
        <div className="postbar">
          <ul className="postMenu">
            <li className="post-menu-item active">All Posts (32)</li>
            <li className="post-menu-item">Article</li>
            <li className="post-menu-item">Event</li>
            <li className="post-menu-item">Education</li>
            <li className="post-menu-item">Job</li>
          </ul>
          <div className="buttons">
            <button
              className="btn btn-primary me-2"
              style={{ background: "#EDEEF0", color: "black", border: "none" }}
            >
              Write a Post{" "}
              <img src={downArrow} alt="Down arrow" className="ms-1" />
            </button>
            <button className="btn btn-primary">Join Groups</button>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            {cardData.map((items, i) => (
              <Card
                key={i}
                image={items.image}
                postType={items.postType}
                heading={items.heading}
                content={items.content}
                userPic={items.userPic}
                username={items.username}
              />
            ))}
          </div>
          <div>
            <div className="location d-flex align-items-center justify-content-between" style={{width:"250px", height:"32px"}}>
              <img src="/cardAssets/location.svg" alt="location" />
              <input type="text" placeholder="Noida, India" style={{outline:"none"}}/>
              <img src="/cardAssets/Pen.svg" alt="location" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{width:"250px", height:"32px"}} >
              <img src="/cardAssets/info.svg" alt="location" />
              <p className="info mb-0 ms-2">
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

const cardData = [
  {
    image: "/cardAssets/cardImg1.svg",
    postType: "/cardAssets/Article.svg",
    heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
    content:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    userPic: "/cardAssets/user1.svg",
    username: "Sarthak Kamra",
  },
  {
    image: "/cardAssets/cardImg2.svg",
    postType: "/cardAssets/Education.svg",
    heading:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    content:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    userPic: "/cardAssets/user2.svg",
    username: "Sarah West",
  },
  {
    image: "/cardAssets/cardImg3.svg",
    postType: "/cardAssets/Meetup.svg",
    heading: "Finance & Investment Elite Social Mixer @Lujiazui",
    content:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    userPic: "/cardAssets/user3.svg",
    username: "Ronal Jones",
  },
  {
    image: "/cardAssets/cardImg3.svg",
    postType: "/cardAssets/article.svg",
    heading: "Software Developer",
    content:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    userPic: "/cardAssets/user1.svg",
    username: "Ronal Jones",
  },
];

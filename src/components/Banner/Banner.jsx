import React from "react";
import "./banner.css";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://wallpaperaccess.com/full/2413987.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-container">
        <h1 className="title">Movie Name</h1>
        <div className="buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="description">
          {truncate(
            `This is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the description`,
            150
          )}
        </h1>
      </div>
      <div className="fade-bottom" />
    </header>
  );
};

export default Banner;

import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import "./homeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar />

      <Banner />

      {/* <Row/> */}
    </div>
  );
};

export default HomeScreen;

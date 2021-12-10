import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-container">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="fade-bottom" />
    </header>
  );
};

export default Banner;

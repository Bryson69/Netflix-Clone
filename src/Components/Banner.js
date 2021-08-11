import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "../Utils/axios";
import requests from "../Utils/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Wrapper src={movie?.backdrop_path}>
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner_title">
          {" "}
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>

        {/* 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List </button>
        </div>

        {/* description */}
        <h1 className="banner__description">
          {" "}
          {truncate(movie?.overview, 150)}{" "}
        </h1>
      </div>

      <div className="banner__fadeBottom"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: white;
  object-fit: contain;
  height: 448px;
  background-size: cover;
  background-position: center center;
  background-image: ${({ src }) =>
    `url("https://image.tmdb.org/t/p/original${src}")`};

  .banner__contents {
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
  }

  .banner__titile {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  .banner__description {
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px;
  }

  .banner__button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;
  }

  .banner__button:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }

  .banner__fadeBottom {
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(31, 30, 30, 0.61),
      #111
    );
  }
`;

export default Banner;

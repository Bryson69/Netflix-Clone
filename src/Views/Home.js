import React from "react";

import Layout from "../Components/Layout";
import requests from "../Utils/requests";
import Row from "../Components/Row";

const Home = () => {
  const rows = [
    {
      title: "NETFLIX ORIGINALS",
      url: requests.fetchNetflixOriginals,
      isLargeRow: true,
    },
    { title: "Trending Now", url: requests.fetchTrending },
    { title: "Top Rated", url: requests.fetchTopRated },
    { title: "Action Movies", url: requests.fetchActionMovies },
    { title: "Comedy Movies", url: requests.fetchComedyMovies },
    { title: "Horror Movies", url: requests.fetchHorrorMovies },
    { title: "Romance Movies", url: requests.fetchRomanceMovies },
    { title: "Documentaries", url: requests.fetchDocumentaries },
  ];

  return (
    <Layout>
      {rows.map(({ title, url, ...props }, key) => (
        <Row title={title} fetchURL={url} {...props} />
      ))}
    </Layout>
  );
};

export default Home;

import React from 'react';
import './App.css';
import Row from "./Row";
import requests from './requests'
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      {/* Nav */}

      {/* Banner */}
      <Banner />

      <Row title="NETFLIX ORIGINALS" 
      fetchURL={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchURL={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;

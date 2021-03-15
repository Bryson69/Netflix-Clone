import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
// import './index.css';


const base_url = "https://image.tmdb.org/t/p/original";


function Row( {title, fetchURL, isLargeRow} ) {

    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on specific condition/varible
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData(){
            // this is the url were sending a request to then the url but replaces the api key our api key
            // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213 
            // await -- When you make a request wait for the promise or data to come back then do sth
            const request = await axios.get(fetchURL);
            console.log(request.data.results);
            //
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    console.table(movies)


    return (
        <div className="row">
            <h2> {title} </h2>

            <div className="row__posters"> 
            {/*several row__posters*/}
        
            {movies.map((movie) => (
                <img 
                key={movie.id}
                className={`row__poster ${ isLargeRow && "row__posterLarge"}`}
                src={ `${base_url}${
                    // if your using a large row then use the poster path otherwise use the movie.backdrop_path
                     isLargeRow ? movie.poster_path : movie.backdrop_path}` } 
                     alt={movie.name}
                />
            ))}
            </div>
            
            {/**/}
        </div>
    );
}

export default Row

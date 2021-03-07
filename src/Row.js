import React, { useState, useEffect } from 'react'
import axios from "./axios";

function Row( {title} ) {

    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on specific condition/varible
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData(){
            const request = await axios.get(fetchURL);
            // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
        }
        fetchData();
    }, [movies]);


    return (
        <div>
            <h2> {title} </h2>
            
            {/**/}

           
        </div>
    )
}

export default Row

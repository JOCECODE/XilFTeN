import React, { useState, useEffect } from 'react'
import axios from "../axios";
import "./MovieRows.css" 

const base_url = "https://image.tmdb.org/t/p/original";

export default function MovieRows({ title, fetchUrl, isLarge, isNull }) {
 
 const [movies, setMovies] = useState([]);
 useEffect(() => {

  async function fetchData() {
    const req = await axios.get(fetchUrl);
    setMovies(req.data.results);
    return req;
  }
  fetchData();
 }, [fetchUrl]);


 return (
  <>

   <div className="row">

    <h2>{title}</h2>

      <div className="posterContainer">

       {movies.map(movie => {

        // if images are null give img class of null 

        return movie.poster_path && movie.backdrop_path == null ? <img alt="null" className="nullImage"/>
        :
        <img
        key={movie.id}

        // if true give class isLarge
        className={`poster ${isLarge && "isLarge"}`}
        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
        alt={movie.name}
        />
      
})}

      </div>

   </div>

  </>
 )
}

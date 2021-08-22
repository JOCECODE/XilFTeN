import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from "../axios";
import "./MovieRows.css" ;
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";

const base_url = "https://image.tmdb.org/t/p/original";

export default function MovieRows({ title, fetchUrl, isLarge, isNull }) {
 const [trailerUrl, setTrailerUrl] = useState("");
 const [movies, setMovies] = useState([]);
 useEffect(() => {

  async function fetchData() {
    const req = await axios.get(fetchUrl);
    setMovies(req.data.results);
    return req;
  }
  fetchData();
  setTrailerUrl("JwPW9VcCq7g")
 }, [fetchUrl]);

      // for the react youtube component
    //   const opts = {
    //   height: '390px',
    //   width: '100%'
    // };
      const handleClick = (movie) => {
        console.log(trailerUrl);
          if (trailerUrl) {
            setTrailerUrl("");
            console.log(trailerUrl);
          } else {
            console.log(movieTrailer(movie?.name || ""));
            movieTrailer(movie?.name || "")
            
            .then((url) => {

              const urlParams = new URLSearchParams(new URL(url).search);
              console.log(urlParams);
              setTrailerUrl(urlParams.get("v"));
              console.log(trailerUrl);     
            })
            .catch(error => console.log(error))
          }
      }
        console.log(movieTrailer("lucifer"));
 return (
   
  <>
    
   <div className="row">

    <h2 className="movieTitle">{title}</h2>

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
        onClick={() => handleClick(movie)}
        />
      
})}

      </div>
        {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
        <ReactPlayer url={"https://www.youtube.com/watch?v=JwPW9VcCq7g"} className="youtubeTrailer"/>
   </div>

  </>
 )
}

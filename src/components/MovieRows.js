import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from "../axios";
import "./MovieRows.css" ;
import YouTube from "react-youtube";

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
 }, [fetchUrl]);

      // for the react youtube component
      const opts = {
      height: '390px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
      const handleClick = (movie) => {
          if (trailerUrl) {
            setTrailerUrl("");
          } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                //https://www.youtube.com/watch?v=XtMThy8QKqU
                const urlParams = URLSearchParams(new URL(url).search);
                //LEFT OFF HERE 2:53:41
                
            }).catch(err => console.log(err));

          }
      }

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
        <YouTube videoId={trailerUrl} opts={opts} />
   </div>

  </>
 )
}

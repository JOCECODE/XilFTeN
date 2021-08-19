import axios from '../axios';
import React, {useState, useEffect} from 'react'
import requests from "../requests";
import "./Banner.css"

function Banner() {
 const [movie, setMovie] = useState([]);

 useEffect(() => {
  async function fetchData() {
   const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      request.data.results[
       Math.floor(Math.random() * request.data.results.length)
    ]
   );
   return request;
 }
 fetchData();

}, []);

// picks a random netflix original film

console.log(movie);

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

 return (
   
   <header className="banner"
   style={{
       backgroundSize: "cover",
       backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
       backgroundPosition: "center center"
     }}>

      <div className="bannerContents">
        <h1 className="bannerTitle">
          
          {/* if there is no movie title show its name, or original name */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

          <div className="buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="fadeBottom"/>
   </header>
  
 )
}

export default Banner;
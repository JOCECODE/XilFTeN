import axios from '../axios';
import React, {useState, useEffect} from 'react'
import requests from "../requests";

export default function Banner() {
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

 return (
  <>
   <header>

   </header>
  </>
 )
}

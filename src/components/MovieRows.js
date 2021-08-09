import React, { useState, useEffect } from 'react'
import axios from "../axios"; 

export default function MovieRows({ title, fetchUrl }) {
 
 const [movies, setMovies] = useState([]);
 useEffect(() => {

  async function fetchData() {
    const req = await axios.get(fetchUrl);
    console.log(req);
    console.table(req);
    return req;
  }
  fetchData();
 }, []);
 
 return (
  <>
   <h2>{ title }</h2>
  </>
 )
}

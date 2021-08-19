import './App.css';
import MovieRows from "./components/MovieRows";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <MovieRows 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLarge={true} />
      <MovieRows title="Trending" fetchUrl={requests.fetchTrending}/>
      <MovieRows title="Romantic Comedies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRows title="Top-Rated" fetchUrl={requests.fetchTopRated}/>
      <MovieRows title="Action" fetchUrl={requests.fetchActionMovies}/>
      <MovieRows title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <MovieRows title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <MovieRows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;


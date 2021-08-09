import './App.css';
import MovieRows from "./components/MovieRows";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello There!</h1>
      <MovieRows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <MovieRows title="Trending" fetchUrl={requests.fetchTrending}/>
      <MovieRows title="RomanticComedies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;

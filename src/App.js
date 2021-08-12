import './App.css';
import MovieRows from "./components/MovieRows";
import requests from "./requests";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <h1 className="xilften">XiLFTeN</h1>
      <Banner/>
      <MovieRows 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLarge />
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

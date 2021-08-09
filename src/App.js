import './App.css';
import MovieRows from "./components/MovieRows";

function App() {
  return (
    <div className="App">
      <h1>Hello There!</h1>
      <MovieRows title="Netflix Originals" />
      <MovieRows title="Trending" />
      <MovieRows title="RomanticComedies" />
    </div>
  );
}

export default App;

import "./App.css";
import MovieList from "./collections/MovieList.jsx";
import Navbar from "./collections/Navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Navbar />
      <MovieList />
    </>
  );
}

export default App;

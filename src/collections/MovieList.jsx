import { useEffect, useState } from "react";

import { getPopularMovies } from "../services/tmdb";
import "./movieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Popular Movies</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {console.log(movies)}
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            style={{ width: "200px", textAlign: "center" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="200"
              className="poster"
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
            </div>
            <div className="overview">
              <h4>Overview:</h4>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

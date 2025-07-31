import { useEffect, useState } from "react";

import { getPopularMovies } from "../services/tmdb";

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
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px", textAlign: "center" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="200"
            />
            <h4>{movie.title}</h4>
            <p>⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

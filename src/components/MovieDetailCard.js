import { useState } from "react";
import MovieCard from "./MovieCard";
const MovieDetailCard = ({ movies, item }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };
  console.log("movies in MOviedetailCard?!", movies);
  console.log('image!!', movies.poster_path)
  return (
    <div>
      <div>
        {movies.results.map((movie) => (
          <div key={movie.id} onClick={() => handleClick(movie)}>
            {movie.title}
          </div>
        ))}
        {selectedMovie && (
          <div>
            <h2>{selectedMovie.title}</h2>
            <h2>{selectedMovie.poster_path}</h2>
            <div
              className="card-info"
              style={{
                backgroundImage:
                  "url(" +
                  `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${selectedMovie.poster_path}` +
                  ")",
                color: "#ffffff",
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailCard;

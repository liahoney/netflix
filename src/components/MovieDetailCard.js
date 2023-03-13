import { useState } from "react";
import MovieCard from "./MovieCard";
import { useLocation } from 'react-router-dom';
const MovieDetailCard = ({ movies }) => {
  // const [selectedMovie, setSelectedMovie] = useState(null);
  // const handleClick = (movie, item) => {
  //   setSelectedMovie(movie);
  // };
  const location = useLocation()

  const id = location.state.id
  const title = location.state.title
  const poster_path = location.state.poster_path
  const overview = location.state.overview
  console.log('idididi', id)
  
  console.log("movies in MOviedetailCard?!", movies);
  // console.log('image!!', movies.poster_path)
  // console.log('hasdf', item.id)
  return (
    <div>
      <div>
        {/* {movies.results.find((movie) => movie.id == movies.id)} */}
        {/* {movies.results.map((movie) => (
          <div key={movie.id} onClick={() => handleClick(movie)}>
            {movie.title}
          </div>
        ))} */}
        {movies && (
          <div>
            {/* <h2>{id}</h2> */}
            <h2>{title}</h2>
           
            {/* <h2>{poster_path}</h2> */}
            {/* <h2>{movies.poster_path}</h2> */}
            <div
              className="card-info"
              style={{
                backgroundImage:
                  "url(" +
                  `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${poster_path}` +
                  ")",
                color: "#ffffff",
                width: 710,
                height: 400
              }}
            ></div>
             <div>{overview}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailCard;

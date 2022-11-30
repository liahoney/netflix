import React, { useEffect } from "react";
import MovieDetailCard from "../components/MovieDetailCard";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { useParams } from "react-router-dom";
import MovieNote from "../components/MovieNote";

const MovieDetail = ({ movies }) => {
  let { id } = useParams();

  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  console.log("popularMovies?", popularMovies);

  const dispatch = useDispatch();

  let movieDetail = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      <MovieNote movies={popularMovies}>
        
      </MovieNote>
      {/* <MovieNote movies={topRatedMovies} />
      <MovieNote movies={upComingMovies} /> */}
    </div>
  );
};

export default MovieDetail;

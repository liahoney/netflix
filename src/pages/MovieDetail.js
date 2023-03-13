import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { useParams } from "react-router-dom";

import MovieCard from '../components/MovieCard';
import MovieDetailCard from '../components/MovieDetailCard';

const MovieDetail = ({ movies, item }) => {
  // let { id } = useParams();
  // let { index } = useParams();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  // console.log("popularMovies?", popularMovies);

  const dispatch = useDispatch();

  let movieDetail = useSelector((state) => state.movie);

  console.log("movies in MovieDetail", popularMovies);
  // useEffect(() => {
  //   dispatch(movieAction.getMovies());
  //   // dispatch({type:"SELECTED_MOVIES", payload:{index:index} })
  //   console.log('movieDetail???', popularMovies)
  // }, []);

  return (
    <div>
    Hello , The name of this Movie is.
   <MovieDetailCard movies={popularMovies} />
    </div>
  );
};

export default MovieDetail;

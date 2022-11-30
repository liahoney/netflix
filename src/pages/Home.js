import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(
    state => state.movie
  );
  // console.log("home", upComingMovies)
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  
  //loading이 true면 loading스피너를 보여주고
  //loading이 false면 데이터를 보여주고

  //true: 데이터 도착 전,
  //false: 데이터 도착 후, 에러가 났을때

  if(loading) {
    return <ClipLoader
    color="#ffff"
    loading={loading}
    size={150}
  />
  }
  return (
    <div>
      
      <Banner movie={popularMovies.results[0]} />

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies}/>
    </div>
  );
};

export default Home;

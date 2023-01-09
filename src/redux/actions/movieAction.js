import api from "../api";
import {useParams} from 'react-router-dom'
const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

      let [popularMovies, topRatedMovies, upComingMovies,genreList] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
        genreApi,
      ]);
      console.log('genreList',genreList)

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          loading: false,
          genreList: genreList.data.genres,
        },
      })
     let { index } = useParams();
      dispatch({
        type: "SELECTED_MOVIES",
        payload: {
          index: index
        }
        
      })
      // console.log("popular", popularMovies.data);
      // console.log("topRated", topRatedMovies);
      // console.log("upComing", upComingMovies);
    } catch (error) {
      //에러핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }

    // let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
    // let response = await fetch(url)
    // let data = await response.json()

    // let url2= `
    // https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`

    // let url3=`https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
  };
}

export const movieAction = {
  getMovies,
};

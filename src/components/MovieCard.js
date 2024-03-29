import { isEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const MovieCard = ({ item }) => {
  // console.log('item?',item)
    const { genreList} = useSelector(state => state.movie)
   
    const navigate = useNavigate();
     console.log('item??', item)
    const onClickMovieCard = (id) => {
        navigate(`/movies/${item.id}`, {
          state: {
            id: item.id,
            poster_path: item.poster_path,
            title: item.title,
            overview: item.overview,
          }
        });
    }

 
  return (
    <div
      className="card-info"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}` +
          ")",
        color: "#ffffff"
        
      }}
      onClick={onClickMovieCard}
    >
      <div>
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">{genreList.find(item=> item.id === id).name}</Badge>
          ))}
        </div>
        <div>
            <span>{item.vote_average}</span>
            <span>{item.adult?"청불":"Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

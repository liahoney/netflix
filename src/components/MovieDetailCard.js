import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { useParams} from 'react-router-dom'
const MovieDetailCard = ({item}) => {
  let { id } = useParams();
    // const { popularMovies, upComingMovies, topRatedMovies,genreList} = useSelector(state => state.movie)
   
 
    console.log("moviecard item!!!!?????", item.poster_path)
    console.log("item이 뭐지?", item)
    console.log("경로", id )
  return (

    
    <div
      className="card-info"
      style={{
        backgroundImage:
        "url(" +
        `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}` +
        ")",
        color: "black",
        
      }}
    
    >
      This is movie Detail
      {id}
      {/* <button onClick={movieDetail}>MovieDetail</button>  */}
      <div className="overlay">
        <h1>{item?.title}</h1>
        {/* <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">{genreList.find(item=> item.id === id).name}</Badge>
          ))}
        </div> */}
        <div>
            <span>{item?.vote_average}</span>
            <span>{item?.adult?"청불":"Under 18"}</span>
           
         
        </div>
      </div>
    </div>
  )
}

export default MovieDetailCard

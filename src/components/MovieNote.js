import React from 'react'
import MovieDetailCard from './MovieDetailCard'
import { useSelector } from 'react-redux'

const MovieNote = ({movies}) => {
  const movieList = useSelector(state => state.movieList)
  return (
    <div>
      <div>
      
        {movieList.results.map((item) => (
          <MovieDetailCard item={item} />
        ))}
      
      
    </div>
    </div>
  )
}

export default MovieNote

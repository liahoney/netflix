import React from 'react'
import MovieDetailCard from './MovieDetailCard'

const MovieNote = ({movies}) => {
  return (
    <div>
      <div>
      
        {movies.results.map((item) => (
          <MovieDetailCard item={item} />
        ))}
      
      
    </div>
    </div>
  )
}

export default MovieNote

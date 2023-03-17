import React from 'react'
import Movie from './Movie';


const MovieList = ({movies}) => {

  return (
      <section>
        {movies.Search.map(movie => 
            <Movie key={movie.imdbID} title={movie.Title} year={movie.Year} type={movie.Type} poster={movie.Poster}/>
          )
        }
      </section>
  )
}

export default MovieList

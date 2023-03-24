import React, { useState, useEffect} from 'react'
import MovieList from './MovieList'
import Form from './Form'

const MovieAPI = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("My little pony");
  const [filter, setFilter] = useState("");

  let newSearch = searchedMovie;
  let newFilter= filter;
  
  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=39ecd9bc&s=${newSearch}&type=${newFilter}`);
      const movies = await response.json();
      setMovies(movies);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [])
  
  const handleChange = (e) => {
    newSearch = e.target.value;
    setSearchedMovie(newSearch)
    fetchMovies();
  }

  const handleSelect = (e) => {
    newFilter = e.target.value;
    setFilter(newFilter)
    fetchMovies();
  }

  return (
      <main>
        <Form errorMessage ={movies.Error} searchedMovie={searchedMovie} filter={filter} handleSelect={handleSelect} handleChange={handleChange}/>
        {movies.Search && movies.Search.length
        ? <MovieList movies={movies}/>
        : null}
      </main>
    
  )
}

export default MovieAPI

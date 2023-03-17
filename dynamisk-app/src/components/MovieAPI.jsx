import React, { useState, useEffect} from 'react'
import MovieList from './MovieList'
import Form from './Form'


const MovieAPI = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("My little pony");

  let newSearch = searchedMovie;
  let filter="";
  
  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=39ecd9bc&s=${newSearch}&type=${filter}`);
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
    setSearchedMovie(e.target.value)
    newSearch = e.target.value;
    fetchMovies();
  }

  const handelSelect = (e) => {
    filter = e.target.value;
    console.log(e.target.value)
    fetchMovies();
  }

  return (
    <main>
      <Form filter={filter} handelSelect={handelSelect} searchedMovie={searchedMovie} handleChange={handleChange}/>
      {movies.Search && movies.Search.length
      ? <MovieList movies={movies}/>
      : <p>{movies.Error}</p>}
    </main>
  )
}

export default MovieAPI

import React, { useState, useEffect} from 'react'
import MovieList from './MovieList'
import Form from './Form'


const MovieAPI = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("My little pony");
  const [newFilter, setNewfilter] = useState("");

  let newSearch = searchedMovie;
  let filter= newFilter;
  
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
    newSearch = e.target.value;
    setSearchedMovie(e.target.value)
    fetchMovies();
  }

  const handleSelect = (e) => {
    filter = e.target.value;
    console.log(e.target.value)
    setNewfilter(filter)
    fetchMovies();
  }

  return (
    <main>
      <Form newFilter={newFilter} filter={filter} handleSelect={handleSelect} searchedMovie={searchedMovie} handleChange={handleChange}/>
      {movies.Search && movies.Search.length
      ? <MovieList movies={movies}/>
      : <p>{movies.Error}</p>}
    </main>
  )
}

export default MovieAPI

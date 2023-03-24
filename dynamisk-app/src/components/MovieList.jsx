import React from 'react'
import Movie from './Movie';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';


const MovieList = ({movies}) => {

  return (
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {movies.Search.map(movie => 
              <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                <Movie title={movie.Title} year={movie.Year} type={movie.Type} poster={movie.Poster}/>
              </Grid>
            )
          }</Grid>
        </Container>
  )
}

export default MovieList

import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Movie = ({title, year, type, poster}) => {
  return (
    <Card sx={{height: 700}}>
       <CardMedia
        sx={{ height: 530 }}
        image={poster}
        title="Movie poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>YEAR:</strong> {year} <strong>TYPE:</strong> {type}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Movie

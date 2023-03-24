import * as React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Header = () => {

  return (
        <Box
          sx={{
            bgcolor: 'white',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary.main"
              gutterBottom
            >
              Movie Database
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Welcome to the Movie Database! Here you can search for your favorite movies, 
              series and games with the help of the <Link color="inherit" href="https://www.omdbapi.com/">
              OMDb API</Link>. Enjoy!
            </Typography>
          </Container>
        </Box>
  )
}

export default Header

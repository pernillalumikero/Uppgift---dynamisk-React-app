import React from 'react'
import { Link, Typography, Box } from '@mui/material';

const Footer = () => {

  return (
      <Box sx={{ bgcolor: 'background.paper', p: 8, pl: 20, pr: 20}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Credits
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Assignment to create a dynamic REACT application for the Frontend developer course at JENSEN YH. 
          Information about movies is fetched with {' '} 
          <Link color="inherit" href="https://mui.com/">OMDb API</Link>{' '} 
          and the site is styled with {' '} 
          <Link color="inherit" href="https://mui.com/">Material UI</Link>.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#"> Pernilla Lumikero</Link>{' '} 
        2023
      </Typography>
      </Box>

  )
}

export default Footer

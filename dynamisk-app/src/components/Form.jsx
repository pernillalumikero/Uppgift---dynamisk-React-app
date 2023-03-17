import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Form = ({filter, handelSelect, searchedMovie, handleChange}) => {

  const handleSubmit = (e) => { 
    e.preventDefault();
  }

  return (
    <>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>

    <div>

      <TextField
            name="input"
            label="Search"
            defaultValue={searchedMovie}
            onChange={handleChange}
          />

      <FormControl onSubmit={handleSubmit} sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            label="Filter"
            onChange={handelSelect}
            >
              <MenuItem value="">
            <em>All</em>
          </MenuItem>
            <MenuItem value="Movie">Movie</MenuItem>
            <MenuItem value="Series">Series</MenuItem>
            <MenuItem value="Game">Game</MenuItem>
          </Select>
        </FormControl>

      </div>
    </>
  )
}

export default Form



// export default function SelectLabels() {
//   const [Hello, setAge] = React.useState('');

//   return (
//     <div>
     
//         <Select
//           value={Hello}
//           label="Hello"
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>Hello</em>
//           </MenuItem>
//           <MenuItem value={10}>Tio</MenuItem>
//           <MenuItem value={20}>Tjugo</MenuItem>
//           <MenuItem value={30}>Trettio</MenuItem>
//         </Select>

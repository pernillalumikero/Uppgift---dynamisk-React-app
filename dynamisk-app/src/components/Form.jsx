import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Form = ({filter, handleSelect, searchedMovie, handleChange}) => {
  return (
    <>
    <div>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
              name="input"
              label="Search"
              defaultValue={searchedMovie}
              onChange={handleChange}
            />
        </FormControl> 
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Age"
          onChange={handleSelect}
        >
          <MenuItem value={" "}>All</MenuItem>
          <MenuItem value={"Movie"}>Movie</MenuItem>
          <MenuItem value={"Series"}>Series</MenuItem>
          <MenuItem value={"Game"}>Game</MenuItem>
        </Select>
      </FormControl>
      </div>
    </>
  )
}

export default Form

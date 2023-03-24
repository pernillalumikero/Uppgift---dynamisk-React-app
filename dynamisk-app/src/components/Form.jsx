import * as React from 'react';
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import { Stack } from '@mui/system';

const Form = ({errorMessage, filter, handleSelect, searchedMovie, handleChange}) => {

  return (
    <Stack direction="row" justifyContent="center">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
              error={errorMessage ? true : false}
              name="input"
              label="Search"
              defaultValue={searchedMovie}
              onChange={handleChange}
              helperText={errorMessage}
            />
      </FormControl> 
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          value={filter}
          label="Filter"
          onChange={handleSelect}
        >
          <MenuItem value={" "}>All</MenuItem>
          <MenuItem value={"Movie"}>Movie</MenuItem>
          <MenuItem value={"Series"}>Series</MenuItem>
          <MenuItem value={"Game"}>Game</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default Form

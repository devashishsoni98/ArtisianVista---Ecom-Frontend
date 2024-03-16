import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      className='outer-s'
    //   sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
      className='inner-s'
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton className='search-bar-btn' type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
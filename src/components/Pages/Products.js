import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Item from '../ListProducts/Item';

/* export default function BasicSelect() {
  const [select, setAge] = React.useState('');
  const { title, description, category,  price, duration, image, id, stock, initial} = Item
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Productos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value='category'
          label="Productos"
          onChange={handleChange}
        >
          <MenuItem value={category}>{category}</MenuItem>
          <MenuItem value={category}>{category}</MenuItem>
          <MenuItem value={category}>{category}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
} */
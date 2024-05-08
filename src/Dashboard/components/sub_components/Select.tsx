import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface wasa{
  type: string;
    espacios: string[];
    minWidth: number;
}

export default function SelectOtherProps({espacios, minWidth, type}: wasa) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      
      <FormControl required sx={{ m: 2, minWidth: minWidth }}>
        <InputLabel id="demo-simple-select-required-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem key={800} value="">
            <em>None</em>
          </MenuItem>
            {
                espacios.map((item, key) => {
                    console.log(item, key);
                    return <MenuItem key={key} value={key}>{item}</MenuItem>
                })
            }
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}

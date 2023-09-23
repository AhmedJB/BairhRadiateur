import React, { Dispatch, SetStateAction } from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



interface ValuesType {
    name : string;
    value : string;
}



type Props = {
    value : string,
    setValue : Dispatch<SetStateAction<string>>,
    label : string,
    options : ValuesType[]
}



const SelectorComp = (props: Props) => {

    const handleChange = (event: SelectChangeEvent) => {
        props.setValue(event.target.value);
      }; 


    const style = {
        
        minWidth : "150px",
        "& .MuiOutlinedInput-notchedOutline" : {
            border:"none",
        },
        "& .MuiSelect-select" : {
            
        },
        "& .MuiFormLabel-root, & .MuiSelect-select, & .MuiSvgIcon-root" : {
            color : "white"
        }
    }


  return (
    <Box sx={style}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label={props.label}
          onChange={handleChange}
        >
            {
                props.options.map((e,i) => {
                    return  <MenuItem key={`${e.name} ${e.value}  ${i}`} value={e.value}>{e.name}</MenuItem>
                })
            }
            
        </Select>
      </FormControl>
    </Box>
  )
}


export default SelectorComp;
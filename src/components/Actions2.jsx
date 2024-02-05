import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';

const Actions2 = ({daletItimest,id,setaddoredit,addoredit,editetitemsID}) => {
    let func=()=>{
        editetitemsID(id)
        setaddoredit(false)
    }
  return (
    <Stack direction="row" spacing={3}>
      <IconButton onClick={()=>func()} color="warning">
        <EditIcon />
      </IconButton>
      <IconButton  onClick={()=>daletItimest(id)} color="error">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default Actions2;

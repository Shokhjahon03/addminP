import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';

const Actions = ({daletItimes,id,editetitemsID}) => {
  return (
    <Stack direction="row" spacing={3}>
      <IconButton onClick={()=>editetitemsID(id)} color="warning">
        <EditIcon />
      </IconButton>
      <IconButton onClick={()=>daletItimes(id)} color="error">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default Actions;

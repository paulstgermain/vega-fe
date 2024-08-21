import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface AddJobButtonProps {
  onClick: () => void;
}

const AddJobButton: React.FC<AddJobButtonProps> = ({ onClick }) => {
  return (
    <Fab
      color="secondary"
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom: 148,
        right: 16,
        bgcolor: 'secondary.main',
        '&:hover': {
          bgcolor: 'secondary.dark',
        },
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddJobButton;
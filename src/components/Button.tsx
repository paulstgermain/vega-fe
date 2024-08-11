import React from 'react';
import { Button, useTheme } from '@mui/material';

const CustomButton: React.FC = () => {
  const theme = useTheme();

  return (
    <Button
      variant='contained'
      color='primary'
      style={{
        padding: theme.spacing(2),
        fontFamily: theme.typography.fontFamily,
      }}
    >
      Custom Button
    </Button>
  )
}

export default CustomButton;
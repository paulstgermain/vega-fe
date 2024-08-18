import React from 'react';
import { Box, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ColumnDivider: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'space-between',
        minHeight: '100px',
        // py: 1,
        mx: 1,
      }}
    >
      <StarIcon sx={{ fontSize: 12, color: 'text.disabled' }} />
      <Divider
        orientation="vertical"
        sx={{
          width: '1px',
          bgcolor: 'text.disabled',
          flexGrow: 1,
        }}
      />
      <StarIcon sx={{ fontSize: 12, color: 'text.disabled' }} />
    </Box>
  );
};

export default ColumnDivider;
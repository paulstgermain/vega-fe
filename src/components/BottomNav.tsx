import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const BottomNavbar: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'primary.dark',
        py: 2, // This sets the height of the navbar (thicker than top nav)
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 4, // Adds some horizontal padding
      }}
    >
      {/* Copyright Statement */}
      <Typography variant="body2" color="common.white">
        &copy; {new Date().getFullYear()} Paul St.Germain
      </Typography>

      {/* Made with Passion */}
      <Typography variant="body2" color="common.white">
        Made with <Box component="span" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>🔥 passion 🔥</Box> by Paul St.Germain
      </Typography>

      {/* Buy Me a Coffee Link */}
      <div style={{ width: '220px' }}>
        <Typography variant="body2" color="common.white" sx={{ paddingBottom: '12px' }}>
          Want to support a hungry dev?
          </Typography>
        <Link href="https://www.buymeacoffee.com/paulstgermain" target="_blank" rel="noopener noreferrer" sx={{ ml: 5 }}>
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me a Coffee"
            style={{ height: '36px', width: '130px' }}
          />
        </Link>
        <Typography variant="body2" color="common.white" sx={{ ml: 8 }}>
          Or <a href='https://www.linkedin.com/in/paul-stgermain/' style={{ color: '#dc2273' }}>hire me!</a>
        </Typography>
      </div>
    </Box>
  );
};

export default BottomNavbar;
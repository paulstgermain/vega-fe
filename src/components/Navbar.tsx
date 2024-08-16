import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AuthButtons from './AuthButtons';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Only add the scroll event listener if the current path is not '/app'
    if (location.pathname !== '/app') {
      window.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]); // Re-run the effect if the pathname changes

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor:
              location.pathname === '/app'
                ? 'primary.main'
                : isScrolled
                ? '#247599'
                : 'transparent',
            transition: 'background-color 0.3s ease',
            boxShadow: isScrolled ? 1 : 0,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Vega
            </Typography>
            <AuthButtons />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Navbar;
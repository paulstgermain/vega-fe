import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AuthButtons from './AuthButtons';

// update function declaration to use TypeScript
function NavBar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current location

  const { isAuthenticated } = useAuth0();

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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Vega
            </Typography>
            <Box sx={{ disply: 'flex', flexGrow: 10 }}>
              <Link
                to="/"
                style={{
                    color: 'white',
                    textDecorationColor: 'rgb(227, 78, 143)',
                    textDecorationThickness: '3px',
                    textUnderlineOffset: '4px',
                    fontWeight: 'normal',
                    marginRight: '12px'
                  }}
              >
                  Home
              </Link>
              {isAuthenticated && (
                <Link
                  to="/app"
                  style={{
                      color: 'white',
                      textDecorationColor: 'rgb(227, 78, 143)',
                      textDecorationThickness: '3px',
                      textUnderlineOffset: '4px',
                      fontWeight: 'normal',
                      marginRight: '12px'
                  }}
                >
                  App
                </Link>
              )}
            </Box>
            <AuthButtons />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default NavBar;
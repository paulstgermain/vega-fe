import React from 'react';
import { Box } from '@mui/material';
import BottomNavbar from './BottomNav';
import NavBar from './Navbar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>
      <BottomNavbar />
    </Box>
  );
};

export default AppLayout;
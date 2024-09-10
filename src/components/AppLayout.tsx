import React, { useState } from 'react';
import { Box } from '@mui/material';
import BottomNavbar from './BottomNav';
import NavBar from './Navbar';
import FindAJobModal from './FindAJobModal';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <NavBar handleOpen={handleOpen} />
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>
      <FindAJobModal open={modalOpen} handleClose={handleClose} />
      <BottomNavbar />
    </Box>
  );
};

export default AppLayout;
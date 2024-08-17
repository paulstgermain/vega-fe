import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './styles/global.css';
import Landing from './pages/Landing'
import Board from './pages/Board';
import Navbar from './components/Navbar';
import { AuthenticationGuard } from './components/AuthGuard';
import theme from './theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavbar from './components/BottomNav';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        { /* CSS Reset */ }
        <CssBaseline />
        { /* Navigation */ }
        <Navbar />
        { /* Page Routes */ }
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<AuthenticationGuard component={Board} />} />
        </Routes>
        <BottomNavbar />
      </ThemeProvider>
    </Router>
  );
}

export default App;

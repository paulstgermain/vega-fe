import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './styles/global.css';
import Landing from './pages/Landing'
import Board from './pages/Board';
import Navbar from './components/Navbar';
import theme from './theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          <Route path="/app" element={<Board />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;

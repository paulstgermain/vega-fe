import React from 'react';
import { CssBaseline } from '@mui/material';
import Landing from './pages/Landing'
import Board from './pages/Board';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      { /* CSS Reset */ }
      <CssBaseline />
      { /* Navigation */ }
      <Navbar />
      { /* Page Routes */ }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App;

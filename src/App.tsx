import React from 'react';
import { CssBaseline } from '@mui/material';
import Landing from './pages/Landing'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Landing />
    </>
  );
}

export default App;

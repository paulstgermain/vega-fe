import { CssBaseline, ThemeProvider } from '@mui/material';
import './styles/global.css';
import Landing from './pages/Landing'
import Board from './pages/Board';
import { AuthenticationGuard } from './components/AuthGuard';
import theme from './theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        { /* CSS Reset */ }
        <CssBaseline />
        { /* App Layout, Routes */ }
        <AppLayout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/app" element={<AuthenticationGuard component={Board} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;

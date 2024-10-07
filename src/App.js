import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#2196F3',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1A1A1A',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif',
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
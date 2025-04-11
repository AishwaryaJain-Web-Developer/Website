import React, { useState, useMemo, createContext, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useTheme } from '@mui/material/styles';


// Create context for color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Theme toggle component
export const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  return (
    <IconButton 
      onClick={colorMode.toggleColorMode} 
      color="inherit"
      sx={{
        ml: 1,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

function App() {
  const [mode, setMode] = useState('dark');
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' 
            ? {
                // Light mode colors
                primary: {
                  main: '#4CAF50',
                  light: '#81C784',
                  dark: '#388E3C',
                },
                secondary: {
                  main: '#2196F3',
                  light: '#64B5F6',
                  dark: '#1976D2',
                },
                background: {
                  default: '#FFFFFF',
                  paper: '#F5F5F5',
                },
                text: {
                  primary: '#333333',
                  secondary: '#666666',
                },
              }
            : {
                // Dark mode colors
                primary: {
                  main: '#4CAF50',
                  light: '#81C784',
                  dark: '#388E3C',
                },
                secondary: {
                  main: '#2196F3',
                  light: '#64B5F6',
                  dark: '#1976D2',
                },
                background: {
                  default: '#0A0A0A',
                  paper: '#1A1A1A',
                },
                text: {
                  primary: '#FFFFFF',
                  secondary: '#B0B0B0',
                },
              }),
        },
        typography: {
          fontFamily: '"Poppins", "Arial", sans-serif',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: 'background-color 0.3s ease',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                transition: 'background-color 0.3s ease',
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
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
    </ColorModeContext.Provider>
  );
}

export default App;
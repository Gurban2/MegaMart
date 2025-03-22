import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Define MUI theme options
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600, 
    },
    h3: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    }
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#f7f9fc',
      secondary: '#b0b8c4',
    },
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600, 
    },
    h3: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    }
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has previously set a preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 
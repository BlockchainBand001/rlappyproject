'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, createContext, useContext } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#00b894',
        dark: '#008060',
      },
      secondary: {
        main: mode === 'light' ? '#2d3436' : '#a8e6cf',
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            padding: '10px 24px',
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: mode === 'light' 
              ? '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)' 
              : '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            backgroundColor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(30, 30, 30, 0.9)',
          },
        },
      },
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

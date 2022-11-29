import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { tema } from './configuracion/configuracion';
import { Actividades } from './pages/Actividades';

function App() {
  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
        {/* <Home /> */}
        <Actividades/>
    </ThemeProvider>



  );
}

export default App;

import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Layout from './Layout';


export default function App() {
  return (

    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/app/*" element={<Layout />} />
        </Routes>
      </ThemeProvider>
    </Router>

  )
}


/*
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  return (
   
  );
}
*/
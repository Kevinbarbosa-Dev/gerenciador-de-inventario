import React from 'react'
import { HashRouter as Router} from 'react-router-dom';
//import LandingPage from './pages/LandingPage';
import Layout from './Layout';
import { ThemeProvider } from './components/ThemeProvider';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';

// import Login from './pages/Login';
// import Cadastrar from './pages/Cadastrar'; 
// import Dashboard from './pages/Dashboad';


export default function App() {
  return (

    //  <Router>
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/Login" element={<Login />} />
    //       <Route path="/Cadastrar" element={<Cadastrar />} />
    // </Routes>
    // </Router>
     <Router>
      <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
      <Layout />
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
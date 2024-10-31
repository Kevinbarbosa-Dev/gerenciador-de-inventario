import React from 'react'
import { HashRouter as Router } from 'react-router-dom';
import Layout from './pages/Layout';
// import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';
// import Cadastrar from './pages/Cadastrar'; 
// import Dashboard from './pages/Dashboad';


export default function App() {
  return (
     <Router>
      <Layout />
    </Router>

  )
}
    // <Router>
      
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/Login" element={<Login />} />
    //       <Route path="/Cadastrar" element={<Cadastrar />} />
    // </Routes>
    //   </div>
    // </Router>

/*
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  return (
   
  );
}
*/
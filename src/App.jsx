import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar'; 


export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastrar" element={<Cadastrar />} />
    </Routes>
      </div>
    </Router>
  )
}
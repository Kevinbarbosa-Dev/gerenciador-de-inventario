import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componente/Login'
import Cadastrar from './componente/Cadastrar'


export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Cadastrar" element={<Cadastrar />} />
        </Routes>
      </div>
    </Router>
  )
}
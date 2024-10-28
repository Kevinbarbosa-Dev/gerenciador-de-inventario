import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/logAndSign.scss'  
export default function Cadastrar() {
  return (
    <div className="login-screen">
      <div className="form-container">
        <div className="form-header">
          <span className="form-toggle-active">Cadastrar</span>
        </div>
        <form className="signup-form">
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <input type="password" placeholder="Confirmar Senha" required />
          <button type="submit" className="submit-button">Cadastrar</button>
        </form>
        <div className='form-footer'>
          <span className='form-question'>Já tem cadastro?</span>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="form-toggle">Entrar</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
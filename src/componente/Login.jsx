import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/logAndSign.scss'

export default function Login() {
  return (
    <div className="login-screen">
      <div className="form-container">
        <div className="form-header">
          <span className="form-toggle active">Entrar</span>
          <Link to="/Cadastrar">
            <span className="form-toggle">Cadastrar</span>
          </Link>
        </div>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className="submit-button">Entrar</button>
        </form>
      </div>
    </div>
  )
}
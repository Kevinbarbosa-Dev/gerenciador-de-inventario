import React from 'react'
import { Link } from 'react-router-dom'
import { 
  loginScreen, 
  formContainer, 
  formHeader, 
  formToggle, 
  formToggleActive, 
  loginForm, 
  inputStyle, 
  submitButton, 
  formFooter, 
  formQuestion 
} from '../assets/styles/tailwind/logAndSign'; 

export default function Login() {
  return (
    <body className='bg-[#E8EAED]'>
    <div className={loginScreen}>
      <div className={`${formContainer}`}>
        <div className={`${formHeader}`}>
          <h2 className={formToggleActive}>Entrar</h2>
        </div>
        <form className={loginForm}>
          <input type="email" placeholder="Email" required className={inputStyle} />
          <input type="password" placeholder="Senha" required className={inputStyle} />
          <button type="submit" className={submitButton}>Entrar</button>
        </form>
        <div className={formFooter}>
          <span className={formQuestion}>Não tem cadastro?</span>
          <Link to="/Cadastrar" style={{ textDecoration: 'none' }}>
            <span className={formToggle}>Cadastrar</span>
          </Link>
        </div>
      </div>
    </div>
    </body>
  )
}
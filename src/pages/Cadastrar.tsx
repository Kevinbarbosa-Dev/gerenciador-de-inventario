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
export default function Cadastrar() {
  return (
    <body className='bg-[#E8EAED]'>
      <div className={loginScreen}>
        <div className={`${formContainer}`}>
          <div className={`${formHeader}`}>
            <h2 className={formToggleActive}>Cadastrar</h2>
          </div>
          <form className={loginForm}>
            <input type="text" className={inputStyle} placeholder="Nome" required />
            <input type="email" className={inputStyle} placeholder="Email" required />
            <input type="password" className={inputStyle} placeholder="Senha" required />
            <input type="password" className={inputStyle} placeholder="Confirmar Senha" required />
            <button type="submit" className={submitButton}>Cadastrar</button>
          </form>
          <div className={formFooter}>
            <span className={formQuestion}>Já tem cadastro?</span>
            <Link to="/Login" style={{ textDecoration: 'none' }}>
              <span className={formToggle}>Entrar</span>
            </Link>
          </div>
        </div>
      </div>
    </body>
  )
}
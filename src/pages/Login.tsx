
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button';
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
  formQuestion,
  visitanteBtn
} from '../assets/styles/tailwind/logAndSign';

import { Loader2 } from 'lucide-react';
import { useLoading } from '../hooks/useLoading';

export default function Login() {
  const { isLoading, handleLoading } = useLoading(2000);

  return (
    <div className='bg-[#E8EAED]'>
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
          <Link
            to="/app/dashboard"
            onClick={() => handleLoading()}
          >
            <Button className={visitanteBtn} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Carregando...
                </>
              ) : (
                "Acessar como Visitante"
              )}
            </Button>
          </Link>
          <div className={formFooter}>
            <span className={formQuestion}>Não tem cadastro?</span>
            <Link to="/Cadastrar" style={{ textDecoration: 'none' }}>
              <span className={formToggle}>Cadastrar</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
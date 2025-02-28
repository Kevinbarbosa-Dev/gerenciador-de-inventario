import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Layout from './Layout';
import { TranslationProvider } from './components/settings/TranslationProvider';


export default function App() {
  return (

    <Router>
      <TranslationProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/app/*" element={<Layout />} />
          </Routes>
        </ThemeProvider>
      </TranslationProvider>
    </Router>

  )
}
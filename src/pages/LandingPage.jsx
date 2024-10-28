import React from "react";
import '../assets/styles/landingPage.scss'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
export default function LandingPage() {
    const [menuActive, setMenuActive] = React.useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }
    return (
        <header>
            <div className="logo"><img src={logo} alt="Stock" className="logo-img"></img> </div>
            
            <div className={`nav-links ${menuActive ? 'active' : ''}`}>
                <nav>Home</nav>
                <nav>Funcionalidade</nav>
                <nav>Plano e Preços</nav>
            </div>
            <div className="buttons">
                <Link to="/Login" style={{ textDecoration: 'none' }}>
                <button className="btn">Login</button>
                </Link>
                <Link to="/Cadastrar" style={{ textDecoration: 'none' }}>
                <button className="btn">Cadastrar</button>
                </Link>
            </div>
            <div className="menu" onClick={toggleMenu}>Menu</div>
        </header>
    )
}
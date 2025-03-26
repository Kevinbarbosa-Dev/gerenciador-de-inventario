import { Link } from "react-router-dom";
import { btnLogAndSign, headerLinks } from "../../assets/styles/tailwind/landPageStyle";

export default function HeaderLand() {
    return (
        <header className="sticky top-0 z-50 bg-[#262626] sm:py-2 py-4 px-4 bg-opacity-80 backdrop-blur" >
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                <Link className="flex items-center space-x-2" to="/">
                    <img
                        src="src/assets/img/logo.png"
                        alt="Stock Logo"
                        width={100}
                        height={40}
                        className="h-10 w-auto"
                    />
                </Link>
                <div className="hidden space-x-6 md:flex">
                    <Link className={headerLinks} to="#">
                        Home
                    </Link>
                    <Link className={headerLinks} to="#">
                        Funcionalidades
                    </Link>
                    <Link className={headerLinks} to="#">
                        Planos e Preços
                    </Link>
                    <Link className={headerLinks} to="#">
                        Sobre
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link
                        className={`${btnLogAndSign} hover:text-[#D90718]`}
                        to="/Login"
                    >
                        Entrar
                    </Link>
                    <Link className={`${btnLogAndSign} bg-[#D90718] border-0 rounded-[10px] hover:text-[#202020] hover:bg-[#E8EAED]`} to="/Cadastrar">
                        Cadastrar
                    </Link>
                </div>
            </nav>
        </header>
    )
}
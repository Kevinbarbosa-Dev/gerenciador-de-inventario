import { Link } from "react-router-dom";

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
                    <Link className="text-sm font-medium text-white hover:text-[#9AA0A6]" to="#">
                        Home
                    </Link>
                    <Link className="text-sm font-medium text-white hover:text-[#9AA0A6]" to="#">
                        Funcionalidades
                    </Link>
                    <Link className="text-sm font-medium text-white hover:text-[#9AA0A6]" to="#">
                        Planos e Preços
                    </Link>
                    <Link className="text-sm font-medium text-white hover:text-[#9AA0A6]" to="#">
                        Sobre
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link
                        className="text-[#E8EAED] p-4 font-normal text-[17px] leading-[20px] hover:cursor-pointer hover:text-[#D90718] transition-colors duration-300"
                        to="/Login"
                    >
                        Entrar
                    </Link>
                    <Link className="bg-[#D90718] text-[#E8EAED] border-0 p-4 rounded-[10px] font-normal text-[17px] leading-[20px] hover:cursor-pointer hover:text-[#202020] hover:bg-[#E8EAED] transition-colors duration-300" to="/Cadastrar">
                        Cadastrar
                    </Link>
                </div>
            </nav>
        </header>
    )
}
import { Button } from "../ui/button";
import { Link } from 'react-router-dom';
export default function MainInfo() {
    return (
        <>
            <section className="py-12 md:py-24 bg-[#262626] text-white">
                <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                            Gerencie seu estoque com um sistema simples e integrado aos seus canais de venda
                        </h1>
                        <p className="text-lg text-[#9AA0A6]">
                            Seu estoque nunca mais te deu problema. Tenha o controle total de seu estoque em qualquer hora e em qualquer lugar em um aplicativo.
                        </p>
                        <Button className="w-fit bg-[#D90718] text-white hover:bg-[#B00614]">
                            <Link to="./Login">Testar agora</Link>
                        </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full bg-[#202020] rounded-lg shadow-lg">
                            <img src="src/assets/img/dashboard-black.png" alt="Ilustração de Dashboard Preto" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-24 bg-[#E8EAED]">
                <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2">
                    <div className="flex items-center justify-center">
                        <div className="w-full bg-[#202020] rounded-lg shadow-lg">
                            <img
                                src="src/assets/img/dashboard-white.png"
                                alt="Ilustração de Dashboard Branco"
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-2xl font-bold text-[#262626] sm:text-3xl relative inline-block">
                            Gerencie seu estoque de forma prática, a qualquer hora e em qualquer lugar.
                        </h2>
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {["Estoque", "Vendas", "Fornecedores", "Relatórios"].map((item, index) => (
                                <div key={index} className="flex flex-col items-center space-y-2">
                                    <div className="rounded-full bg-[#262626] p-2">
                                        <div className="h-6 w-6 bg-white"></div>
                                    </div>
                                    <span className="text-sm font-medium text-[#262626]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
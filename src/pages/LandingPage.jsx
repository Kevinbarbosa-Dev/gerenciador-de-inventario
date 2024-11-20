import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import DashboardBlack from "../assets/img/dashboard-black.png";
import DashboardWhite from "../assets/img/dashboard-white.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#262626] text-white">
      <header className="sticky top-0 z-50 bg-[#262626] py-4 px-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link className="flex items-center space-x-2" to="/">
            <img
              src={logo}
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
              About us
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
      <main className="flex-1">
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
                <img src={DashboardBlack} alt="Ilustração de Dashboard Preto" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-[#E8EAED]">
          <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2">
            <div className="flex items-center justify-center">
            <div className="w-full bg-[#202020] rounded-lg shadow-lg">
              <img
                src={DashboardWhite}
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
        <section className="py-12 md:py-24 bg-[#262626] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Planos</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[{ price: "$7.99", title: "Básico" }, { price: "$9.99", title: "Padrão", featured: true }, { price: "$11.99", title: "Premium" }].map((plan, index) => (
                <Card
                  key={index}
                  className={`flex flex-col ${plan.featured ? "border-2 border-[#D90718] bg-[#202020]" : "border-[#E5E7EB] bg-[#262626]"
                    }`}
                >
                  <CardHeader>
                    <h3 className="text-lg font-bold text-white">{plan.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">
                      {plan.price}
                      <span className="text-base font-normal text-[#9AA0A6]">/mês</span>
                    </div>
                    <p className="mt-2 text-sm text-[#9AA0A6]">
                      5000 de armazenamento com recursos particulares
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.featured
                        ? "bg-[#D90718] text-white hover:bg-[#B00614]"
                        : "bg-[#E5E7EB] text-[#262626] hover:bg-[#BDC1C6]"
                        }`}
                    >
                      Começar agora
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#E5E7EB] bg-[#262626] text-white">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 py-12 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-bold">Stock</h4>
            <p className="mt-2 text-sm text-[#9AA0A6]">
              Desenvolvido para lojas físicas e/ou digitais, a ferramenta impulsiona o crescimento de quem está vivendo o sonho do negócio próprio.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Contate-nos</h4>
            <ul className="mt-2 space-y-2 text-sm text-[#9AA0A6]">
              <li>Telefone: 55 11</li>
              <li>email@email.com</li>
              <li>São Paulo</li>
              <li>Rua Stock</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Suporte</h4>
            <ul className="mt-2 space-y-2 text-sm text-[#9AA0A6]">
              <li>WhatsApp: 55@gmail.com</li>
              <li>Email: suporte@email.com</li>
              <li>Chat: stock.com/suporte</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
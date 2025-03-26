import {
    imgContainerFather,
    imgContainerChild,
    imgStyle,
    containerContent,
    sessao,
    infoContainer
} from "../../assets/styles/tailwind/landPageStyle";
import { Button } from "../ui/button";
import { Link } from 'react-router-dom';
import { Package, ShoppingCart, Truck, BarChart } from "lucide-react"
import { useEffect, useState } from "react";
import { ImageSkeleton } from "../imagemSkaleton";
import { useLoading } from "../../hooks/useLoading";


const categorias = [
    { nome: "Estoque", icon: <Package className="h-10 w-10" /> },
    { nome: "Vendas", icon: <ShoppingCart className="h-10 w-10" /> },
    { nome: "Entregas", icon: <Truck className="h-10 w-10" /> },
    { nome: "Relatórios", icon: <BarChart className="h-10 w-10" /> }
]
export default function MainInfo() {
    const { isLoading } = useLoading(800, true);
    return (
        <>
            <section className={`${sessao} bg-[#262626] text-white`}>
                <div className={containerContent}>
                    <div className={`${infoContainer}`}>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                            Gerencie seu estoque com um sistema simples e integrado aos seus canais de venda
                        </h1>
                        <p className="text-lg text-[#9AA0A6]">
                            Seu estoque nunca mais te deu problema. Tenha o controle total do seu estoque em qualquer hora e em qualquer lugar em um aplicativo.
                        </p>
                        <Link to="./Login">
                            <Button className="w-fit bg-[#D90718] text-white hover:bg-[#B00614]">
                                Testar agora
                            </Button>
                        </Link>
                    </div>
                    <div className={imgContainerFather}>
                        <div className={imgContainerChild}>
                            {isLoading ? <ImageSkeleton /> : <img src="src/assets/img/dashboard-black.png" alt="Ilustração de Dashboard Preto" className={imgStyle} />}
                        </div>
                    </div>

                </div>
            </section>
            <section className={`${sessao} bg-[#E8EAED]`}>
                <div className={containerContent}>
                    <div className={imgContainerFather}>
                        <div className={imgContainerChild}>
                            {isLoading ? <ImageSkeleton /> : <img src="src/assets/img/dashboard-white.png" alt="Ilustração de Dashboard Branco" className={imgStyle} />}
                        </div>
                    </div>
                    <div className={`${infoContainer} w-full`}>
                        <h2 className="text-2xl font-bold text-[#262626] sm:text-3xl relative inline-block">
                            Gerencie seu estoque de forma prática, a qualquer hora e em qualquer lugar.
                        </h2>
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {categorias.map((item, index) => (
                                <div key={index} className="flex flex-col items-center space-y-2">
                                    <div>
                                        <div className=" text-[black]">{item.icon}</div>
                                    </div>
                                    <span className="text-sm font-medium text-[#262626]">{item.nome}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
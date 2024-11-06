import React, { useState, useMemo } from 'react';
import Tabela from '../components/Tabela';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SortAsc, SortDesc } from 'lucide-react';

const data = [
    { id: 1, nome: 'Produto 1', categoria: "Electronics", quantidade: 10, valor: 100, dataEntrada: '01/01/2021', dataSaida: '01/01/2021' },
    { id: 2, nome: 'Produto 2', categoria: "Electronics", quantidade: 20, valor: 200, dataEntrada: '01/01/2021', dataSaida: '01/01/2021' },
    { id: 3, nome: 'Produto 3', categoria: "Electronics", quantidade: 30, valor: 300, dataEntrada: '01/01/2021', dataSaida: '01/01/2021' },
    { id: 4, nome: 'Produto 4', categoria: "Electronics", quantidade: 40, valor: 400, dataEntrada: '01/01/2021', dataSaida: '01/01/2021' },
    { id: 5, nome: 'Abc', categoria: "Electronics", quantidade: 50, valor: 500, dataEntrada: '01/01/2021', dataSaida: '01/01/2021' },
    { id: 6, nome: 'BCA', categoria: "Electronics", quantidade: 60, valor: 600, dataEntrada: '01/01/2021', dataSaida: '01/01/2021' },
];

export default function Dashboard() {
    const [pesquisar, setPesquisar] = useState("");
    const [inventorio] = useState(data);
    const [isAlphabetical, setIsAlphabetical] = useState(false)

    const filteredInventory = useMemo(() => {
        let result = inventorio.filter(item =>
            item.nome.toLowerCase().includes(pesquisar.toLowerCase()) ||
            item.categoria.toLowerCase().includes(pesquisar.toLowerCase())
        )

        if (isAlphabetical) {
            result = [...result].sort((a, b) => a.nome.localeCompare(b.nome))
        }

        return result
    }, [inventorio, pesquisar, isAlphabetical])

    const toggleSort = () => {
        setIsAlphabetical(!isAlphabetical)
    }

    return (
        <main className="grid grid-rows-[40%_6%_52%] w-full max-w-[1200px] h-screen">
            <div className="shadow-[0_0_2px_rgba(0,0,0,0.1)] w-full flex items-center justify-center transition-all duration-500 border-b-[1px] border-b-gray-300">
                <h1>Dashboard</h1>
            </div>
            <div className="flex mb-4 justify-between">
                <Button>Adicionar Produto</Button>
                <div className="flex gap-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Pesquisar produtos..." value={pesquisar}
                            onChange={(e) => setPesquisar(e.target.value)}
                            className="pl-8"/>
                    </div>
                    <Button
                        variant="outline" size="icon" onClick={toggleSort}
                        title={isAlphabetical ? "Voltar à ordem original" : "Ordenar alfabeticamente"}>
                        {isAlphabetical ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
                    </Button>
                </div>
            </div>
            <div className="overflow-hidden w-full shadow-[0_0_2px_rgba(0,0,0,0.1)] bg-white flex justify-between transition-all duration-500 border-t-[1px] border-t-gray-300">
                <Tabela filteredInventory={filteredInventory} />
            </div>
        </main>
    );
}

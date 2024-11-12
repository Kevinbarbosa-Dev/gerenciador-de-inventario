import React, { useState, useMemo } from 'react'
import Tabela from '../components/Tabela'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SortAsc, SortDesc, ListFilter } from 'lucide-react'
import ModalAdd from '@/components/ModalAdd'
import RelatorioTabela from '../components/RelatorioTabela'
import { DonutChart } from '@/components/DonutChart'

const initialData = [
    { id: 1, nome: "Produto 1", categoria: "Categoria 1", descricao: "Descrição do Produto 1", quantidade: 10, valor: 100.00, fornecedor: "Fornecedor 1" },
    { id: 2, nome: "Produto 2", categoria: "Categoria 2", descricao: "Descrição do Produto 2", quantidade: 5, 
    valor: 50.00, fornecedor: "Fornecedor 2" },
    {id: 3, nome: "Produto 3", categoria: "Categoria 3", descricao: "Descrição do Produto 3", quantidade: 15,
    valor: 150.00, fornecedor: "Fornecedor 3"},
    {id: 4,  nome: "Produto 4", categoria: "Categoria 4", descricao: "Descrição do Produto 4", quantidade: 10,
    valor: 100.00, fornecedor: "Fornecedor 4"},
    {id: 5,  nome: "Produto 4", categoria: "Categoria 5", descricao: "Descrição do Produto 4", quantidade: 10,
    valor: 100.00, fornecedor: "Fornecedor 5"},
]

export default function Dashboard() {
    const [pesquisar, setPesquisar] = useState("")
    const [inventorio, setInventorio] = useState(initialData)
    const [isAlphabetical, setIsAlphabetical] = useState(false)
    const [open, setOpen] = useState(false)

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

    const handleRemove = (id) => {
        setInventorio(prevInventorio => prevInventorio.filter(item => item.id !== id))
    }

    const handleAddItem = (newItem) => {
        setInventorio(prevInventorio => [...prevInventorio, { ...newItem, id: prevInventorio.length + 1 }])
    }

    const totalItems = inventorio.reduce((sum, item) => sum + item.quantidade, 0)
    const totalValue = inventorio.reduce((sum, item) => sum + item.valor, 0);
    const categories = [...new Set(inventorio.map(item => item.categoria))];
    const suppliers = [...new Set(inventorio.map(item => item.fornecedor))];

    return (
        <main className="grid grid-rows-[42%_8%_50%] w-full max-w-[1200px] h-screen">
            <div className="shadow-[0_0_2px_rgba(0,0,0,0.1)] w-full flex items-center justify-center transition-all duration-500 border-b-[1px] border-b-gray-300">
                <div className='flex w-full h-full ml-2'>
                    <div className="flex items-center justify-center w-full h-full">
                    <RelatorioTabela inventorio={inventorio} totalItems={totalItems} totalValue={totalValue} />
                    </div>
                    <div className="w-full h-full">
                        <DonutChart data={inventorio}/>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 justify-between p-2">
                <Button onClick={() => setOpen(true)}>Adicionar Produto</Button>
                <ModalAdd 
                open={open} 
                onOpenChange={setOpen} 
                onAddItem={handleAddItem} 
                categories={categories}
                suppliers={suppliers}/>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" title="Filtrar">
                        <ListFilter className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline" size="icon" onClick={toggleSort}
                        title={isAlphabetical ? "Voltar à ordem original" : "Ordenar alfabeticamente"}>
                        {isAlphabetical ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
                    </Button>
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Pesquisar produtos..." value={pesquisar}
                            onChange={(e) => setPesquisar(e.target.value)}
                            className="pl-8" />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden w-full shadow-[0_0_2px_rgba(0,0,0,0.1)] bg-white flex justify-between transition-all duration-500 border-t-[1px] border-t-gray-300">
                <Tabela filteredInventory={filteredInventory} onRemove={handleRemove} />
            </div>
        </main>
    )
}
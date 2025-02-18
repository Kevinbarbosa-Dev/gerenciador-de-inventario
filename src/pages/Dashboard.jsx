"use client"

import { useState, useMemo, useEffect } from "react"
import Tabela from "../components/Tabela"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SortAsc, SortDesc, LayoutGrid, LayoutList } from "lucide-react"
import ModalAdd from "@/components/ModalAdd"
import RelatorioTabela from "../components/RelatorioTabela"
import { DonutChart } from "@/components/DonutChart"
import { SideBar } from "@/components/SideBar"

const initialData = [
    {
        id: 1, nome: "Cadeira Gamer", material: "Couro Sintético", descricao: "Cadeira ergonômica para jogos e escritório", quantidade: 15,
        valor: 899.9, fornecedor: "GamerWorld",
    },
    {
        id: 2, nome: "Mesa de Escritório", material: "Madeira MDF", descricao: "Mesa espaçosa para computador com gavetas", quantidade: 10,
        valor: 499.9, fornecedor: "MoveisFlex",
    },
    {
        id: 3, nome: "Monitor 24 Polegadas", material: "Plástico e Metal", descricao: "Monitor Full HD com painel IPS", quantidade: 20,
        valor: 1249.0, fornecedor: "TechVision",
    },
    {
        id: 4, nome: "Teclado Mecânico RGB", material: "Alumínio e Plástico", descricao: "Teclado gamer com iluminação personalizável", quantidade: 30,
        valor: 299.9, fornecedor: "GameZone",
    },
    {
        id: 5, nome: "Mouse Sem Fio", material: "Plástico", descricao: "Mouse ergonômico com alta precisão e bateria recarregável", quantidade: 25,
        valor: 199.9, fornecedor: "WirelessTech",
    },
    {
        id: 6, nome: "Headset com Microfone", material: "Plástico e Couro", descricao: "Headset com som estéreo e microfone ajustável", quantidade: 18,
        valor: 349.9, fornecedor: "AudioMax",
    },
]

export default function Dashboard() {
    const [pesquisar, setPesquisar] = useState("")
    const [inventorio, setInventorio] = useState(initialData)
    const [isAlphabetical, setIsAlphabetical] = useState(false)
    const [open, setOpen] = useState(false)
    const [viewMode, setViewMode] = useState("table")
    const [editingItem, setEditingItem] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    useEffect(() => {
        const checkIsMobile = () =>{
        const isMobile = window.innerWidth <= 425
        setIsMobile(isMobile)
        setViewMode(isMobile ? "card" : "table")
        }
        checkIsMobile()
        window.addEventListener("resize", checkIsMobile)
        return () => window.removeEventListener("resize", checkIsMobile)
    }, [])

    const filteredInventory = useMemo(() => {
        let result = inventorio.filter(
            (item) =>
                item.nome.toLowerCase().includes(pesquisar.toLowerCase()) ||
                item.material.toLowerCase().includes(pesquisar.toLowerCase()),
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
        setInventorio((prevInventorio) => prevInventorio.filter((item) => item.id !== id))
    }

    const handleAddItem = (newItem) => {
        if (editingItem) {
            setInventorio((prevInventorio) =>
                prevInventorio.map((item) => (item.id === editingItem.id ? { ...item, ...newItem } : item)),
            )
            setEditingItem(null)
        } else {
            setInventorio((prevInventorio) => [...prevInventorio, { ...newItem, id: prevInventorio.length + 1 }])
        }
        setOpen(false)
    }

    const handleEdit = (item) => {
        setEditingItem(item)
        setOpen(true)
    }

    const totalItems = inventorio.reduce((sum, item) => sum + item.quantidade, 0)
    const totalValue = inventorio.reduce((sum, item) => sum + item.valor, 0)
    const materiais = [...new Set(inventorio.map((item) => item.material))]
    const suppliers = [...new Set(inventorio.map((item) => item.fornecedor))]

    return (
        <main
            className={`w-full max-w-[1200px] h-screen ${isMobile ? "grid grid-rows-[auto_auto_1fr]" : "grid md:grid-rows-[50%_8%_42%]"}`}
        >
            {!isMobile && (
                <div className="hidden md:flex shadow-[0_0_2px_rgba(0,0,0,0.1)] w-full items-center justify-center transition-all duration-500 border-b-[1px] bg-gray-100 border-gray-300 dark:border-[#303030] dark:bg-[#262626]">
                    <div className="flex w-full h-full ml-2">
                        <div className="flex items-center justify-center w-full h-full">
                            <RelatorioTabela inventorio={inventorio} totalItems={totalItems} totalValue={totalValue} />
                        </div>
                        <div className="w-full h-full">
                            <DonutChart data={inventorio} />
                        </div>
                    </div>
                </div>
            )}

            {isMobile ? (
                <>
                    <div className=" p-4 bg-gray-100 dark:bg-[#262626] flex justify-between">
                        <SideBar/>
                        <Button
                            onClick={() => setOpen(true)}
                            className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]"
                        >
                            Add +
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 p-2 bg-gray-100 dark:bg-[#262626]">
                        <div className="flex gap-2 justify-between">

                            <Button
                                className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]"
                                variant="outline"
                                size="icon"
                                onClick={toggleSort}
                                title={isAlphabetical ? "Voltar à ordem original" : "Ordenar alfabeticamente"}
                            >
                                {isAlphabetical ? (
                                    <SortDesc className="h-4 w-4 dark:text-[#202020]" />
                                ) : (
                                    <SortAsc className="h-4 w-4 dark:text-[#202020]" />
                                )}
                            </Button>
                            <div className="relative flex-1">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
                            <Input
                                placeholder="Pesquisar produtos..."
                                value={pesquisar}
                                onChange={(e) => setPesquisar(e.target.value)}
                                className="pl-8 w-full dark:bg-[#202020] dark:text-gray-200 dark:border-[#303030]"
                            />
                        </div>
                        {!isMobile &&(
                            <Button
                            className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]"
                            onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
                        >
                            {viewMode === "table" ? "Card" : "Tabela"}
                        </Button>
                        )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex gap-2 justify-between p-2 bg-gray-100 dark:bg-[#262626]">
                    <Button onClick={() => setOpen(true)} className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]">
                        Adicionar Produto
                    </Button>
                    <ModalAdd
                        open={open}
                        onOpenChange={setOpen}
                        onAddItem={handleAddItem}
                        materiais={materiais}
                        suppliers={suppliers}
                        editingItem={editingItem}
                    />
                    <div className="flex gap-2">
                        <Button
                            className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]"
                            variant="outline"
                            size="icon"
                            onClick={toggleSort}
                            title={isAlphabetical ? "Voltar à ordem original" : "Ordenar alfabeticamente"}
                        >
                            {isAlphabetical ? (
                                <SortDesc className="h-4 w-4 dark:text-[#202020]" />
                            ) : (
                                <SortAsc className="h-4 w-4 dark:text-[#202020]" />
                            )}
                        </Button>
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
                            <Input
                                placeholder="Pesquisar produtos..."
                                value={pesquisar}
                                onChange={(e) => setPesquisar(e.target.value)}
                                className="pl-8 dark:bg-[#202020] dark:text-gray-200 dark:border-[#303030]"
                            />
                        </div>
                        <Button
                            className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020] "
                            onClick={() => setViewMode(viewMode === "table" ? "list" : "table")}
                        >
                            {viewMode === "table" ? (
                                <LayoutList className="mr-2 h-4 w-4 dark:text-[#202020]" />
                            ) : (
                                <LayoutGrid className="mr-2 h-4 w-4 dark:text-[#202020]" />
                            )}
                            {viewMode === "table" ? "Lista" : "Tabela"}
                        </Button>
                    </div>
                </div>
            )}

            <div className="overflow-hidden w-full shadow-[0_0_2px_rgba(0,0,0,0.1)] bg-gray-100 dark:bg-[#262626] flex justify-between transition-all duration-500 border-t-[1px] border-gray-300 dark:border-[#303030]">
                <Tabela filteredInventory={filteredInventory} onEdit={handleEdit} onRemove={handleRemove} viewMode={viewMode} />
            </div>

            <ModalAdd
                open={open}
                onOpenChange={setOpen}
                onAddItem={handleAddItem}
                materiais={materiais}
                suppliers={suppliers}
                editingItem={editingItem}
            />
        </main>
    )
}


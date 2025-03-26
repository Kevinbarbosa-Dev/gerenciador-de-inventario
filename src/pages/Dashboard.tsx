"use client"

import { useState, useMemo, useEffect } from "react"
import Tabela from "../components/Tabela"
import ModalAdd from "../components/ModalAdd"
import RelatorioTabela from "../components/RelatorioTabela"
import { DonutChart } from "../components/DonutChart"
import Mock from "../components/Mock"
import AdicionarBtnDesk from "../components/AdicionarBtnDesk"
import AlphabeticalSort from "../components/AlphabeticalSort"
import SearchComponent from "../components/SearchComponent.tsx"
import ModoTabelaOuLista from "../components/ModoTabelaOuLista"
import { InventarioItem } from "../type/InventarioItem"
import BottomNav from "../components/BottomNav"
import { useIsMobile } from "../hooks/useIsMobile"



interface DashboardProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Dashboard({ open, setOpen }: DashboardProps) {
  const isMobile = useIsMobile()
  const [pesquisar, setPesquisar] = useState<string>("")
  const [inventorio, setInventorio] = useState<InventarioItem[]>(Mock)
  const [isAlphabetical, setIsAlphabetical] = useState<boolean>(false)
  const [viewMode, setViewMode] = useState<"table" | "card">(isMobile ? "card" : "table")
  const [editingItem, setEditingItem] = useState<InventarioItem | null>(null)

  useEffect(() => {
    setViewMode(isMobile ? "card" : 'table')
  }, [isMobile])


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

  const handleRemove = (id: number) => {
    setInventorio((prevInventorio) => prevInventorio.filter((item) => item.id !== id))
  }

  const handleAddItem = (newItem: InventarioItem) => {
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

  const handleEdit = (item: InventarioItem) => {
    setEditingItem(item)
    setOpen(true)
  }

  const resetModal = () => {
    setEditingItem(null)
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
          <div className="flex flex-col gap-2 p-2 bg-gray-100 dark:bg-[#262626]">
            <div className="flex gap-2 justify-between">
              <AlphabeticalSort isAlphabetical={isAlphabetical} toggleSort={toggleSort} />
              <SearchComponent pesquisar={pesquisar} setPesquisar={setPesquisar} />
            </div>
          </div>
        </>
      ) : (
        <div className="flex gap-2 justify-between p-2 bg-gray-100 dark:bg-[#262626]">
          <AdicionarBtnDesk setOpen={setOpen} setEditingItem={setEditingItem} />
          <ModalAdd
            open={open}
            onOpenChange={setOpen}
            onAddItem={handleAddItem}
            materiais={materiais}
            suppliers={suppliers}
            editingItem={editingItem}
            reset={resetModal}
          />
          <div className="flex gap-2">
            <AlphabeticalSort toggleSort={toggleSort} isAlphabetical={isAlphabetical} />
            <SearchComponent pesquisar={pesquisar} setPesquisar={setPesquisar} />
            <ModoTabelaOuLista viewMode={viewMode} setViewMode={setViewMode} />
          </div>
        </div>
      )}

      <div className="w-full shadow-[0_0_2px_rgba(0,0,0,0.1)] bg-gray-100 dark:bg-[#262626] flex justify-between transition-all duration-500 border-t-[1px] border-gray-300 dark:border-[#303030]">
        <Tabela filteredInventory={filteredInventory} onEdit={handleEdit} onRemove={handleRemove} viewMode={viewMode} />
      </div>

      <ModalAdd
        open={open}
        onOpenChange={setOpen}
        onAddItem={handleAddItem}
        materiais={materiais}
        suppliers={suppliers}
        editingItem={editingItem}
        reset={resetModal}
      />
      {isMobile && <BottomNav setOpen={setOpen} />}
    </main>
  )
}
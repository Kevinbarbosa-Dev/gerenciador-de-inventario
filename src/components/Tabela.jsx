import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react'

export default function Tabela({ filteredInventory, onRemove }) {
  const [hoveredRow, setHoveredRow] = useState(null)

  if (filteredInventory.length === 0) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <p className="text-lg text-gray-500">Nenhum produto adicionado</p>
      </div>
    )
  }

  return (
    <Table className="overlay-x-auto ml-2 font-sans">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Quantidade</TableHead>
          <TableHead className="text-right">Valor</TableHead>
          <TableHead>Fornecedor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredInventory.map((item) => (
          <TableRow 
            key={item.id}
            onMouseEnter={() => setHoveredRow(item.id)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.nome}</TableCell>
            <TableCell>{item.categoria}</TableCell>
            <TableCell>{item.descricao}</TableCell>
            <TableCell>{item.quantidade}</TableCell>
            <TableCell className="text-right">{item.valor}</TableCell>
            <TableCell>{item.fornecedor}</TableCell>
            <TableCell>
              {hoveredRow === item.id && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(item.id)}
                  className="float-right shadow-md hover:shadow-lg transition-shadow h-4 w-4 mr-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
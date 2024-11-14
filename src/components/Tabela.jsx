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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Tabela({ filteredInventory, onRemove, viewMode }) {
  const [hoveredRow, setHoveredRow] = useState(null)

  if (filteredInventory.length === 0) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <p className="text-lg text-gray-500">Nenhum produto adicionado</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full">
    <ScrollArea className="h-[calc(100vh-120px)]">
    {viewMode === 'table' ? (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
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
                    <Trash2/>
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        {filteredInventory.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.nome}</CardTitle>
              <Badge variant="secondary">{item.quantidade} unidade{item.quantidade > 1 ? 's' : ''}</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-xl font-bold">R$ {item.valor.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">{item.categoria}</p>
                  <p className="text-xs text-muted-foreground">{item.descricao}</p>
                  <p className="text-xs text-muted-foreground">{item.fornecedor}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )}
    </ScrollArea>
    </div>
  )
}
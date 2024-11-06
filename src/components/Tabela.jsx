
//import '../assets/styles/Tabela/style.scss';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  export default function Tabela({filteredInventory}) {
    return (
      <Table className="overflow-x-auto ml-2 font-sans">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead className="text-right">Valor</TableHead>
            <TableHead>Data de Entrada</TableHead>
            <TableHead>Data de Saída</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.categoria}</TableCell>
              <TableCell>{item.quantidade}</TableCell>
              <TableCell className="text-right">{item.valor}</TableCell>
              <TableCell>{item.dataEntrada}</TableCell>
              <TableCell>{item.dataSaida}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

interface RelatorioTabelaProps {
  inventorio: any[];
  totalItems: number;
  totalValue: number;
}


export default function RelatorioTabela({ inventorio, totalItems, totalValue }: RelatorioTabelaProps) {
  return (
    <div className="flex flex-col w-full gap-1 mr-2">
      <Card className="w-full bg-gray-100 border-gray-300 dark:bg-[#262626] dark:border-[#30303018]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{inventorio.length}</div>
        </CardContent>
      </Card>

      <Card className="w-full bg-gray-100 border-gray-300 dark:bg-[#262626] dark:border-[#303030]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">Total em Estoque</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalItems} unidades</div>
        </CardContent>
      </Card>

      <Card className="w-full bg-gray-100 border-gray-300 dark:bg-[#262626] dark:border-[#303030]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const COLORS = [
    'hsl(var(--chart-1))', 
    'hsl(var(--chart-2))', 
    'hsl(var(--chart-3))', 
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
    'hsl(var(--chart-6))',
    'hsl(var(--chart-7))',
    'hsl(var(--chart-8))',
    'hsl(var(--chart-9))',
    'hsl(var(--chart-10))'
]

export function DonutChart({ data }) {
    const chartData = Object.entries(
        data.reduce((acc, item) => {
            acc[item.material] = (acc[item.material] || 0) + item.quantidade;
            return acc;
        }, {})
    ).map(([name, value]) => ({ name, value }));

    return (
        <Card className="w-full h-full max-w-3xl mx-auto p-4 text-sm md:text-base bg-gray-100 border-gray-300 dark:bg-[#262626] dark:border-[#303030] rounded-md">
            <CardHeader>
                <CardTitle >Distribuição de Produtos</CardTitle>
                <CardDescription >Quantidade por material</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between h-[calc(100%-5rem)] gap-4">
               <ChartContainer config={{}} className="w-full md:w-1/2 h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius="60%"
                                outerRadius="80%"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
                <div className="flex flex-col justify-center space-y-1 w-full max-w-xs">
                    {chartData.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <span>{item.name}: {item.value} itens</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

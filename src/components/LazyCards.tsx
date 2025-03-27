import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import DropDownOptions from "./DropDownOptions"
import { useLoading } from "../hooks/useLoading"
import { CardSkeleton } from "./CardSkeleton"
import { useInView } from "../hooks/useInView"
import { TabelaProps } from "../type/TabelaProps"


export default function LazyCards({ item, onEdit, onRemove }: TabelaProps) {
    const { ref, hasLoaded } = useInView()
    const { isLoading } = useLoading(800, hasLoaded)

    return (
        <div ref={ref}>
            {hasLoaded ? (
                isLoading ? (
                    <CardSkeleton />
                ) : (
                    <Card className="bg-gray-100 border-gray-300 dark:bg-[#202020] dark:border-[#303030]">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{item?.nome}</CardTitle>
                            <div className="flex justify-end items-center gap-2">
                                <Badge variant="secondary" className="ml-2">
                                    {item?.quantidade} unidade{item?.quantidade && item.quantidade > 1 ? "s" : ""}

                                </Badge>
                                {item && (
                                    <DropDownOptions item={item} onEdit={onEdit} onRemove={onRemove} />
                                )}

                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <div>
                                    <p className="text-xl font-bold">R$ {item?.valor.toFixed(2)}</p>
                                    <p className="text-xs text-muted-foreground">{item?.material}</p>
                                    <p className="text-xs text-muted-foreground">{item?.descricao}</p>
                                    <p className="text-xs text-muted-foreground">{item?.fornecedor}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            ) : (
                <CardSkeleton />
            )}
        </div>
    )
}
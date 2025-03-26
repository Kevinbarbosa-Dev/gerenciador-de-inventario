import { InventarioItem } from "./InventarioItem"

export interface TabelaProps {
    filteredInventory: InventarioItem[]
    onRemove: (id: number) => void
    item?: InventarioItem
    onEdit: (item: InventarioItem) => void
    viewMode: "table" | "card" | "list"
}
import { InventarioItem } from "./InventarioItem"

export interface DropDownOptionsProps {
    size?: number
    item: InventarioItem
    onEdit: (item: InventarioItem) => void
    onRemove: (id: number) => void
}
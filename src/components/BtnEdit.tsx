import { Button } from "../components/ui/button"
import { Edit2 } from "lucide-react"
import { InventarioItem } from "../type/InventarioItem"

interface BtnEditProps {
    item: InventarioItem;
    onEdit: (item: InventarioItem) => void
    size?: number
    className?: string
    children?: React.ReactNode
}

export default function BtnEdit({ item, onEdit, className, children }: BtnEditProps) {
    return (
        <Button
            size="icon"
            onClick={() => onEdit(item)}
            className={`${className} bg-transparent hover:bg-transparent h-4 w-4`}
        >
            <Edit2 size={15} />{children}
        </Button>
    )
}
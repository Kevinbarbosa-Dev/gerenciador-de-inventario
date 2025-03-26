import { Button } from "../components/ui/button"
import { Trash2 } from "lucide-react"

interface BtnRemoveProps {
    id: number
    onRemove: (id: number) => void
    size?: number
    className?: string
    children?: React.ReactNode
}

export default function BtnRemove({ id, onRemove, className, children }: BtnRemoveProps) {
    return (
        <Button
            size="icon"
            onClick={() => onRemove(id)}
            className={`${className}w-4 h-4 bg-tranparente hover:bg-transparent`}
        >
            <Trash2 size={15} /> {children}
        </Button>
    )
}
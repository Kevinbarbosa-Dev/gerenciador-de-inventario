import { Button } from "../components/ui/button"
interface Props {
    setOpen: (open: boolean) => void
    setEditingItem: (item: any) => void
}
export default function AdicionarBtnDesk({ setOpen, setEditingItem }: Props) {
    return (
        <Button onClick={() => setOpen(true)} onChange={() => setEditingItem(null)} className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]">
            Adicionar Produto
        </Button>
    )
}
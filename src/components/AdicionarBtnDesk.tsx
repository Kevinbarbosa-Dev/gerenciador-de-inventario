import { Button } from "../components/ui/button"
interface Props {
    setOpen: (open: boolean) => void
}
export default function AdicionarBtnDesk({ setOpen }: Props) {
    return (
        <Button onClick={() => setOpen(true)} className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]">
            Adicionar Produto
        </Button>
    )
}
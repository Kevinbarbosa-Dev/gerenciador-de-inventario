import { Button } from "@/components/ui/button"

export default function AdicionarBtnDesk({ setOpen }) {
    return (
        <Button onClick={() => setOpen(true)} className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]">
            Adicionar Produto
        </Button>
    )
}
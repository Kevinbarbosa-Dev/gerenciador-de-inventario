import { LayoutGrid, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function ModoTabelaOuLista({ viewMode, setViewMode }) {
    return (
        <Button
            className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020] "
            onClick={() => setViewMode(viewMode === "table" ? "list" : "table")}
        >
            {viewMode === "table" ? (
                <LayoutList className="mr-2 h-4 w-4 dark:text-[#202020]" />
            ) : (
                <LayoutGrid className="mr-2 h-4 w-4 dark:text-[#202020]" />
            )}
            {viewMode === "table" ? "Lista" : "Tabela"}
        </Button>
    )
}
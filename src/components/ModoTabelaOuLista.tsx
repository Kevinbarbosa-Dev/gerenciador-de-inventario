import { LayoutGrid, LayoutList } from "lucide-react";
import { Button } from "../components/ui/button"
import { useIsMobile } from "../hooks/useIsMobile";
interface ModoTabelaOuListaProps {
    viewMode: "table" | "card" | "list",
    setViewMode: (value: "table" | "card" | "list") => void
}
export default function ModoTabelaOuLista({ viewMode, setViewMode }: ModoTabelaOuListaProps) {
    const isMobile = useIsMobile()

    const toggleViewMode = () => {
        if (isMobile) {
            setViewMode(viewMode === "card" ? "table" : "card");
        } else {
            setViewMode(viewMode === "table" ? "list" : "table")
        }
    }
    return (
        <Button
            className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020] "
            onClick={toggleViewMode}
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
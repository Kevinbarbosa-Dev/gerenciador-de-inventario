import { LayoutGrid, LayoutList } from "lucide-react";
import { Button } from "../components/ui/button"
import { useIsMobile } from "../hooks/useIsMobile";
interface ModoTabelaOuListaProps {
    viewMode: "table" | "card",
    setViewMode: (value: "table" | "card") => void
}
export default function ModoTabelaOuLista({ viewMode, setViewMode }: ModoTabelaOuListaProps) {
    const isMobile = useIsMobile()

    const toggleViewMode = () => {
        if (isMobile) {
            setViewMode(viewMode === "card" ? "table" : "card");
        } else {
            setViewMode(viewMode === "table" ? "card" : "table")
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
            {viewMode === "table" ? "Cartão" : "Tabela"}
        </Button>
    )
}
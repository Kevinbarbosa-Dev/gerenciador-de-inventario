import { SortAsc, SortDesc } from "lucide-react";
import { Button } from "../components/ui/button"

interface AlphabeticalSortProps {
    toggleSort: () => void;
    isAlphabetical: boolean;
}

export default function AlphabeticaSort({ toggleSort, isAlphabetical }: AlphabeticalSortProps) {
    return (
        <Button
            className="dark:bg-[#E8EAED] dark:border-[#303030] dark:text-[#202020]"
            variant="outline"
            size="icon"
            onClick={toggleSort}
            title={isAlphabetical ? "Voltar à ordem original" : "Ordenar alfabeticamente"}
        >
            {isAlphabetical ? (
                <SortDesc className="h-4 w-4 dark:text-[#202020]" />
            ) : (
                <SortAsc className="h-4 w-4 dark:text-[#202020]" />
            )}
        </Button>
    )
}
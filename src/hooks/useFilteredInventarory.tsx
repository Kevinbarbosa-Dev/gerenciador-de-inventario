import { useMemo } from "react";
import { InventarioItem } from "../type/InventarioItem";

interface filterProps {
    inventorio: InventarioItem[];
    pesquisar: string;
    isAlphabetical: boolean;
}

export default function useFilteredInventarory({ inventorio, pesquisar, isAlphabetical }: filterProps) {

    const filteredInventory = useMemo(() => {
        let result = inventorio.filter(
            (item) =>
                item.nome.toLowerCase().includes(pesquisar.toLowerCase()) ||
                item.material.toLowerCase().includes(pesquisar.toLowerCase()),
        )

        if (isAlphabetical) {
            result = [...result].sort((a, b) => a.nome.localeCompare(b.nome))
        }

        return result
    }, [inventorio, pesquisar, isAlphabetical])
    return filteredInventory
}
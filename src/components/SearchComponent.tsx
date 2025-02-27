import { Search } from "lucide-react";
import { Input } from "../components/ui/input"
interface SearchComponentProps {
    pesquisar: string
    setPesquisar: (value: string) => void;
}
export default function SearchComponent({ pesquisar, setPesquisar }: SearchComponentProps) {
    return (
        <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
            <Input
                placeholder="Pesquisar produtos..."
                value={pesquisar}
                onChange={(e) => setPesquisar(e.target.value)}
                className="pl-8 dark:bg-[#202020] dark:text-gray-200 dark:border-[#303030]"
            />
        </div>
    )
}
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Language({ handleLanguageChange, t }) {
    return (
        <div>
            <Label className="mb-2 block">{t.language}</Label>
            <Select defaultValue="pt-BR" onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-full border-gray-300 bg-gray-100 hover:border-gray-400 dark:bg-[#262626] dark:border-[#303030]">
                    <SelectValue placeholder={t.selectLanguage} />
                </SelectTrigger>
                <SelectContent className="dark:bg-[#202020]">
                    <SelectItem value="pt-BR">Português (BR)</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
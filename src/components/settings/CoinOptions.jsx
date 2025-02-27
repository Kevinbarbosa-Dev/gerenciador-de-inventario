import { Label } from "@/components/ui/label.tsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
export default function CoinOptions({ t }) {
    return (
        <div>
            <Label className="mb-2 block">{t.currencyFormat}</Label>
            <Select defaultValue="BRL">
                <SelectTrigger className="w-full border-gray-300 bg-gray-100 hover:border-gray-400 dark:bg-[#262626] dark:border-[#303030]">
                    <SelectValue placeholder={t.selectCurrency} />
                </SelectTrigger>
                <SelectContent className="dark:bg-[#202020]">
                    <SelectItem value="BRL">R$ (Real Brasileiro)</SelectItem>
                    <SelectItem value="USD">$ (US Dollar)</SelectItem>
                    <SelectItem value="EUR">€ (Euro)</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
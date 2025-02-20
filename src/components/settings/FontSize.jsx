import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function FontSize({ t, fontSize, setFontSize, handleFontSizeChange }) {
    return (
        <div>
            <Label className="mb-2 block">{t.fontSize}</Label>
            <Select value={fontSize} onValueChange={handleFontSizeChange}>
                <SelectTrigger className="w-full border-gray-300 bg-gray-100 hover:border-gray-400 dark:bg-[#262626] dark:border-[#303030]">
                    <SelectValue placeholder={setFontSize} />
                </SelectTrigger>
                <SelectContent className="dark:bg-[#202020]">
                    <SelectItem value="small">{t.small}</SelectItem>
                    <SelectItem value="medium">{t.medium}</SelectItem>
                    <SelectItem value="large">{t.large}</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
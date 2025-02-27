import { Label } from "@/components/ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Moon, Palette } from "lucide-react";
export default function ThemeOptions({ t, setTheme }) {
    return (
        <div>
            <Label className="mb-4 block">{t.theme}</Label>
            <RadioGroup className="grid grid-cols-2 gap-4">
                <Label
                    htmlFor="light"
                    className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted dark:bg-[#202020] dark:border-[#303030] p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                    <RadioGroupItem value="light" id="light" className="sr-only" onClick={() => setTheme("light")} />
                    <Palette className="h-5 w-5 mr-2" />
                    <span>{t.light}</span>
                </Label>
                <Label
                    htmlFor="dark"
                    className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted dark:bg-[#202020] dark:border-[#303030] p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                    <RadioGroupItem value="dark" id="dark" className="sr-only" onClick={() => setTheme("dark")} />
                    <Moon className="h-5 w-5 mr-2" />
                    <span>{t.dark}</span>
                </Label>
            </RadioGroup>
        </div>
    )
}
import { useState, useEffect } from "react"
import { Bell, Moon, Palette} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue } 
  from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/ThemeProvider"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const translations = {
  'pt-BR': {
    appearance: 'Aparência',
    theme: 'Tema',
    light: 'Claro',
    dark: 'Escuro',
    fontSize: 'Tamanho da Fonte',
    small: 'Pequena',
    medium: 'Média',
    large: 'Grande',
    language: 'Idioma do Sistema',
    selectFontSize: 'Selecione o tamanho da fonte',
    selectLanguage: 'Selecione o idioma',
    currencyFormat: 'Formato de Moeda',
    selectCurrency: 'Selecione a moeda',
    notification: 'Notificações',
    lowStockAlert: 'Alerta de Estoque Baixo',
  },
  'en-US': {
    appearance: 'Appearance',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    fontSize: 'Font Size',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    language: 'System Language',
    selectFontSize: 'Select font size',
    selectLanguage: 'Select language',
    currencyFormat: 'Currency Format',
    selectCurrency: 'Select currency',
    notification: 'Notifications',
    lowStockAlert: 'Low Stock Alert',
  },
  'es': {
    appearance: 'Apariencia',
    theme: 'Tema',
    light: 'Claro',
    dark: 'Oscuro',
    fontSize: 'Tamaño de Fuente',
    small: 'Pequeña',
    medium: 'Mediana',
    large: 'Grande',
    language: 'Idioma del Sistema',
    selectFontSize: 'Seleccione el tamaño de fuente',
    selectLanguage: 'Seleccione el idioma',
    currencyFormat:'Formato de Moneda',
    selectCurrency: 'Seleccione la moneda',
    
    notification: 'Notificaciones',
    lowStockAlert: 'Alerta de Stock Bajo',
  }
}
export default function Settings() {
  const { setTheme } = useTheme();
  const [fontSize, setFontSize] = useState("medium");
  const [language, setLanguage] = useState("pt-BR")
  const [t, setT] = useState(translations['pt-BR'])

  useEffect(() => {
    setT(translations[language])
    document.documentElement.lang = language
  }, [language])
  const handleLanguageChange = (value) => {
    setLanguage(value)
  }
  const handleFontSizeChange = (value) => {
    setFontSize(value);
  
    const fontSizes = {
      small: '14px',
      medium: '16px',
      large: '18px'
    };
  
    document.documentElement.style.fontSize = fontSizes[value] || '16px';
  };
  return (
    <div className="flex h-screen w-full bg-gray-100  dark:bg-[#262626]">
      <div className="flex-1">
        <ScrollArea className="h-full w-full">
          <ScrollBar className=" dark:bg-[#404040]" />
          <div className=" p-6 space-y-8 w-full">
            <Card className="dark:bg-[#262626] dark:border-[#303030]">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-lg font-semibold pb-2 border-b border-border">{t.appearance}</h2>
                <div className="space-y-4">
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
                  <div>
                    <Label className="mb-2 block">{t.fontSize}</Label>
                    <Select value={fontSize} onValueChange={handleFontSizeChange}>
                      <SelectTrigger className="w-full border-gray-300 bg-gray-100 hover:border-gray-400 dark:bg-[#262626] dark:border-[#303030]">
                        <SelectValue placeholder={t.setFontSize}/>
                      </SelectTrigger>
                      <SelectContent className="dark:bg-[#202020]">
                        <SelectItem value="small">{t.small}</SelectItem>
                        <SelectItem value="medium">{t.medium}</SelectItem>
                        <SelectItem value="large">{t.large}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className=" dark:bg-[#262626] dark:border-[#303030]">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-lg font-semibold pb-2 border-b border-border">{t.language}</h2>
                <div className="space-y-4">
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
                </div>
              </CardContent>
            </Card>

            <Card className=" dark:bg-[#262626] dark:border-[#303030]">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-lg font-semibold pb-2 border-b border-border">{t.notification}</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="stock-alerts" className="flex items-center space-x-2">
                      <Bell className="h-5 w-5" />
                      <span>{t.lowStockAlert}</span>
                    </Label>
                    <Switch id="stock-alerts" className="dark:border-[#303030]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

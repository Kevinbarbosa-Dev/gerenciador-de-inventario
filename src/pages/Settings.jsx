import '../assets/styles/settings.scss'
import { Bell, Globe, Moon, Palette, Shield } from "lucide-react"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
// bg-gray-100 dark:bg-gray-900"
export default function Settings() {
    return (
        <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-6 space-y-8">
          <h1 className="text-3xl font-bold">Configurações do App</h1>

          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-lg font-semibold pb-2 border-b border-border">Aparência</h2>
              <div className="space-y-4">
                <div>
                  <Label className="mb-4 block">Tema</Label>
                  <RadioGroup defaultValue="dark" className="grid grid-cols-2 gap-4">
                    <Label
                      htmlFor="light"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <RadioGroupItem value="light" id="light" className="sr-only" />
                      <Palette className="h-5 w-5 mr-2" />
                      <span>Claro</span>
                    </Label>
                    <Label
                      htmlFor="dark"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <RadioGroupItem value="dark" id="dark" className="sr-only" />
                      <Moon className="h-5 w-5 mr-2" />
                      <span>Escuro</span>
                    </Label>
                  </RadioGroup>
                </div>
                <div>
                  <Label className="mb-2 block">Tamanho da Fonte</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tamanho da fonte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Pequena</SelectItem>
                      <SelectItem value="medium">Média</SelectItem>
                      <SelectItem value="large">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-lg font-semibold pb-2 border-b border-border">Idioma</h2>
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Idioma do Sistema</Label>
                  <Select defaultValue="pt-BR">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (BR)</SelectItem>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Formato de Moeda</Label>
                  <Select defaultValue="BRL">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o formato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BRL">R$ (Real Brasileiro)</SelectItem>
                      <SelectItem value="USD">$ (US Dollar)</SelectItem>
                      <SelectItem value="EUR">€ (Euro)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-lg font-semibold pb-2 border-b border-border">Notificações</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="stock-alerts" className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Alertas de estoque baixo</span>
                  </Label>
                  <Switch id="stock-alerts" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="price-changes" className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>Alterações de preço</span>
                  </Label>
                  <Switch id="price-changes" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="new-products" className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Novos produtos</span>
                  </Label>
                  <Switch id="new-products" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    )
}

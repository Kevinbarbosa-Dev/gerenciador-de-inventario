'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function PricingModal({ isOpen, onClose }) {
  const plans = [
    {
      name: "Básico",
      price: "7.99",
      storage: "100GB de armazenamento com recursos particulares",
      highlighted: false
    },
    {
      name: "Padrão",
      price: "9.99",
      storage: "500GB de armazenamento com recursos particulares",
      highlighted: true
    },
    {
      name: "Premium",
      price: "11.99",
      storage: "2TB de armazenamento com recursos particulares",
      highlighted: false
    }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] bg-[#202020] border-[#303030]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-white mb-6">Nossos Planos</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden ${
                plan.highlighted 
                  ? 'border-2 border-red-600 bg-[#202020]' 
                  : 'border border-[#303030] bg-[#202020]'
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline text-white">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-gray-400">/mês</span>
                </div>
                <p className="mt-4 text-sm text-gray-400">{plan.storage}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  Começar agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}


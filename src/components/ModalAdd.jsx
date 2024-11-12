import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import InputAdd from "./InputAdd"



export default function ModalAdd({open, onOpenChange, onAddItem, categories,suppliers}) {

  const handleSubmit = (newItem) => {
    onAddItem(newItem)
    onOpenChange(false)
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicione um novo produto</DialogTitle>
        </DialogHeader>
        <InputAdd 
        onSubmit={handleSubmit} 
        onCancel={() => onOpenChange(false)} 
        categories={categories} 
        suppliers={suppliers}/>
      </DialogContent>
    </Dialog>
  )
}
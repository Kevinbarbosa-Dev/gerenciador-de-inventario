import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import InputAdd from "./InputAdd"



export default function ModalAdd({open, onOpenChange, onAddItem, materiais,suppliers, editingItem}) {

  const handleSubmit = (newItem) => {
    onAddItem(newItem)
    onOpenChange(false)
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] dark:bg-[#202020]">
        <DialogHeader>
          <DialogTitle>{editingItem ? 'Editar produto' : 'Adicione um novo produto'}</DialogTitle>
        </DialogHeader>
        <InputAdd 
        onSubmit={handleSubmit} 
        onCancel={() => onOpenChange(false)} 
        materiais={materiais} 
        suppliers={suppliers}
        initialData={editingItem}
        />
      </DialogContent>
    </Dialog>
  )
}
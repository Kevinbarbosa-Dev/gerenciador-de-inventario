import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function InputAdd({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        id: "",
        nome: "",
        categoria: "",
        descricao: "",
        quantidade: "",
        valor: "",
        fornecedor: "",
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prevData => ({ ...prevData, [id]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-2 py-4">
                <div className="grid gap-2">
                    <Label htmlFor="id">ID</Label>
                    <Input id="id" value={formData.id} onChange={handleChange} placeholder="Digite o ID" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="nome">Produto</Label>
                    <Input id="nome" value={formData.nome} onChange={handleChange} placeholder="Digite o nome do produto" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="categoria">Categoria</Label>
                    <Input id="categoria" value={formData.categoria} onChange={handleChange} placeholder="Digite a categoria" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Input id="descricao" value={formData.descricao} onChange={handleChange} placeholder="Digite a descrição" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="quantidade">Quantidade</Label>
                    <Input id="quantidade" type="number" value={formData.quantidade} onChange={handleChange} placeholder="Digite a quantidade" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="valor">Preço</Label>
                    <Input id="valor" type="number" step="0.01" value={formData.valor} onChange={handleChange} placeholder="Digite o preço" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="fornecedor">Fornecedor</Label>
                    <Input id="fornecedor" type="text" value={formData.fornecedor} onChange={handleChange}
                    placeholder="Digite o fornecedor" />
                </div>
                <div className="flex justify-end gap-3">
                    <Button type="button" variant="outline" onClick={onCancel}>
                        Cancelar
                    </Button>
                    <Button type="submit">Adicionar</Button>
                </div>
            </div>
        </form>
    )
}
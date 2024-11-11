// InputAdd.js
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DynamicSelect from './DynamicSelect';

export default function InputAdd({ onSubmit, onCancel,categories, suppliers }) {
    const [formData, setFormData] = useState({
        id: "",
        nome: "",
        categoria: "",
        descricao: "",
        quantidade: "",
        valor: "",
        fornecedor: "",
    });

    const handleChange = (id, value) => {
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const convertedData = {
            ...formData,
            quantidade: Number(formData.quantidade),
            valor: parseFloat(formData.valor),
        };
        onSubmit(convertedData);
    };

    const handleAddCategoria = (novaCategoria) => {
        setCategorias((prev) => [...prev, novaCategoria]);
    };

    const handleAddFornecedor = (novoFornecedor) => {
        setFornecedores((prev) => [...prev, novoFornecedor]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-2 py-4">
                <Label htmlFor="id">ID</Label>
                <Input id="id" value={formData.id} onChange={(e) => handleChange('id', e.target.value)} placeholder="Digite o ID" />

                <Label htmlFor="nome">Produto</Label>
                <Input id="nome" value={formData.nome} onChange={(e) => handleChange('nome', e.target.value)} placeholder="Digite o nome do produto" />

                <DynamicSelect
                    label="Categoria"
                    options={categorias}
                    value={formData.categoria}
                    onChange={(value) => handleChange('categoria', value)}
                    onAddNew={handleAddCategoria}
                />

                <Label htmlFor="descricao">Descrição</Label>
                <Input id="descricao" value={formData.descricao} onChange={(e) => handleChange('descricao', e.target.value)} placeholder="Digite a descrição" />

                <Label htmlFor="quantidade">Quantidade</Label>
                <Input id="quantidade" type="number" value={formData.quantidade} onChange={(e) => handleChange('quantidade', e.target.value)} placeholder="Digite a quantidade" />

                <Label htmlFor="valor">Preço</Label>
                <Input id="valor" type="number" step="0.01" value={formData.valor} onChange={(e) => handleChange('valor', e.target.value)} placeholder="Digite o preço" />

                <DynamicSelect
                    label="Fornecedor"
                    options={fornecedores}
                    value={formData.fornecedor}
                    onChange={(value) => handleChange('fornecedor', value)}
                    onAddNew={handleAddFornecedor}
                />

                <div className="flex justify-end gap-3">
                    <Button type="button" variant="outline" onClick={onCancel}>
                        Cancelar
                    </Button>
                    <Button type="submit">Adicionar</Button>
                </div>
            </div>
        </form>
    );
}

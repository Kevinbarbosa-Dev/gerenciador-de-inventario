import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectOrAdd from "./SelectOrAdd";

/*************  ✨ Codeium Command 🌟  *************/
export default function InputAdd({ onSubmit, onCancel, materiais, suppliers, initialData }) {
    const [formData, setFormData] = useState({
        id: "",
        nome: "",
        material: "",
        descricao: "",
        quantidade: "",
        valor: "",
        fornecedor: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (id, value) => {
        if (value === undefined || value === null) {
            return;
        }
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.id || !formData.nome || !formData.material || !formData.quantidade || !formData.valor || !formData.fornecedor) {
            alert("Preencha todos os campos!");
            return;
        }
        const convertedData = {
            ...formData,
            quantidade: Number(formData.quantidade),
            valor: parseFloat(formData.valor),
        };
        onSubmit(convertedData);
    };

    const reset = () => {
        if (initialData) {
            setFormData(initialData);
        }
        setFormData(initialData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-2 py-4">
                <Label htmlFor="id">ID</Label>
                <Input
                    id="id"
                    type="number"
                    value={formData.id}
                    onChange={(e) => handleChange('id', e.target.value)}
                    placeholder="Digite o ID"
                    required
                    disabled={initialData}
                />

                <Label htmlFor="nome">Produto</Label>
                <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleChange('nome', e.target.value)}
                    placeholder="Digite o nome do produto"
                    required
                />

                <SelectOrAdd
                    label="Material"
                    options={materiais}
                    value={formData.material}
                    onChange={(value) => handleChange('material', value)}
                />

                <Label htmlFor="descricao">Descrição</Label>
                <Input
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) => handleChange('descricao', e.target.value)}
                    placeholder="Digite a descrição"
                />

                <Label htmlFor="quantidade">Quantidade</Label>
                <Input
                    id="quantidade"
                    type="number"
                    value={formData.quantidade}
                    onChange={(e) => handleChange('quantidade', e.target.value)}
                    placeholder="Digite a quantidade"
                    required
                />

                <Label htmlFor="valor">Preço</Label>
                <Input
                    id="valor"
                    type="number"
                    step="0.01"
                    value={formData.valor}
                    onChange={(e) => handleChange('valor', e.target.value)}
                    placeholder="Digite o preço"
                    required
                />

                <SelectOrAdd
                    label="Fornecedor"
                    options={suppliers}
                    value={formData.fornecedor}
                    onChange={(value) => handleChange('fornecedor', value)}
                />

                <div className="flex justify-end gap-3">
                    <Button className='dark:bg-[#202020] dark:border-[#303030]' type="button" variant="outline" onClick={onCancel}>
                        Cancelar
                    </Button>
                    <Button className='dark:bg-[#E8EAED] dark:text-[#202020]' type="submit">
                        {initialData ? 'Atualizar' : 'Adicionar'}
                    </Button>
                </div>
            </div>
        </form>
    );
}



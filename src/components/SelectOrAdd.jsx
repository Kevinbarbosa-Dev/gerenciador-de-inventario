// components/DynamicSelect.js
import { Input } from './ui/input';
import { useState } from 'react';

export default function SelectOrAdd({ label, options, value, onChange }) {
    const [inputValue, setInputValue] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'new') {
            setShowInput(true);
        } else {
            onChange(selectedValue);
        }
    };


    return (
        <div className="grid gap-2">
            <label>{label}</label>
            {!showInput ? (
                <select value={value || ''} onChange={handleSelectChange} className="p-2 border rounded dark:bg-[#202020] dark:border-[#303030]">
                    <option value="">Selecione uma opção</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                    <option value="new">+ Adicionar nova</option>
                </select>
            ) : (
                <div className="flex items-center gap-2">
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Nova opção"
                        className="p-2 border rounded flex-1"
                        required
                    />
                </div>
            )}
        </div>
    );
}

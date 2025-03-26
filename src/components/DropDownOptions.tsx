import { useState, useEffect, useRef } from 'react';
import '../assets/styles/Sidebar/sidebar.css'
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import BtnEdit from './BtnEdit';
import BtnRemove from './BtnRemove';
import { DropDownOptionsProps } from '../type/DropDownOptionsProps';


export default function DropDownOptions({ size = 20, item, onEdit, onRemove }: DropDownOptionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                <DotsVerticalIcon style={{ cursor: 'pointer', height: size, width: size }} />
            </div>
            <div className={`absolute top-full right-0 w-36 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 visible scale-100 translate-y-2 gap-2 pl-6 ' : 'opacity-0 scale-95 invisible translate-y-0'}`}>
                <div className="flex flex-col gap-2 p-2">
                    <BtnEdit item={item} onEdit={onEdit} className=' bg-black' >Editar</BtnEdit>
                    <BtnRemove onRemove={onRemove} id={item.id} className=' bg-black' >Remover</BtnRemove>
                </div>
            </div>
        </div>
    );
}

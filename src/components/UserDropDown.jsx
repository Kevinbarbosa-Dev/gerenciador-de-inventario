import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExitIcon, GearIcon, LightningBoltIcon, PersonIcon } from "@radix-ui/react-icons";
import { dropdownItemClasses } from '@/assets/styles/tailwind/dropdownItemClasses';
import '../assets/styles/Sidebar/sidebar.css'
import BtnSetaBaixa from './BtnSetaBaixa';

export default function UserDropDown({ mouseSobreSidebar }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex items-center cursor-pointer " onClick={toggleDropdown}>
                <PersonIcon />
                <span className="ml-2">Perfil</span> 
                <BtnSetaBaixa mouseSobreSidebar={mouseSobreSidebar}/>       
            </div>
            <div className={`absolute top-full left-0 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 max-h-64 visible translate-y-0' : 'opacity-0 max-h-0 invisible -translate-y-2'}`}>
                <Link to="/" className={`${dropdownItemClasses}`}>
                    <LightningBoltIcon className="mr-2" />
                    Update
                </Link>
                <Link to="/Login" className={`${dropdownItemClasses}`}>
                    <ExitIcon className="mr-2" />
                    Sair
                </Link>
            </div>
        </div>
    );
}

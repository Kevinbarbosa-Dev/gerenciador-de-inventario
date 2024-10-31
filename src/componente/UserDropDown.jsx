// src/componente/UserDropDown.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GearIcon, LightningBoltIcon, PersonIcon } from "@radix-ui/react-icons";
import '../assets/styles/UserDropDown.scss';

export default function UserDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
        <div className="profile-dropdown" ref={dropdownRef}>
            <div className="profile-trigger" onClick={toggleDropdown}>
                <PersonIcon />
                <span>Perfil</span>
            </div>
            <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/profile/settings" className="dropdown-item">
                    <GearIcon />
                    Configurações
                </Link>
                <Link to="/logout" className="dropdown-item">
                    <LightningBoltIcon />
                    Update
                </Link>
            </div>
        </div>
    );
}

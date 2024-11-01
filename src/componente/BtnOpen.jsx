import React from 'react';
import '../assets/styles/Sidebar/sidebar.scss';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function BtnOpen({onClick}) {
    return (
        <div className="hamburger-icon" onClick={onClick}>
            <HamburgerMenuIcon style={{ cursor: 'pointer', height: '20px', width: '20px' }} />
        </div>
    )
}
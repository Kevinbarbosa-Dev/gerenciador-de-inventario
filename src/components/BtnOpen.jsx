import React from 'react';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function BtnOpen({ onClick }) {
    return (
        <div
            className="absolute top-4 left-4 z-10 rounded-full p-2 transition-all duration-300 ease-in-out"
            onClick={onClick}
        >
            <HamburgerMenuIcon style={{ cursor: 'pointer', height: '20px', width: '20px' }} />
        </div>
    );
}

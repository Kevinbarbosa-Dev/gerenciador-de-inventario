import React from 'react';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function BtnOpen({ onClick }) {
    return (
        <div
            className="absolute top-4 left-4 z-10 rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={onClick}
        >
            <HamburgerMenuIcon style={{ cursor: 'pointer', height: '20px', width: '20px' }} />
        </div>
    );
}

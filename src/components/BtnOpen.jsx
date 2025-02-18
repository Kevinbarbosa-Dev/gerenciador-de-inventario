import React from 'react';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function BtnOpen({ onClick }) {
    return (
        <div
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={onClick}
        >
            <HamburgerMenuIcon style={{ cursor: 'pointer', height: '20px', width: '20px' }} />
        </div>
    );
}

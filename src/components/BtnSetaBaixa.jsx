import React from 'react';
import { ChevronDownIcon } from "@radix-ui/react-icons";
export default function BtnSetaBaixa({ mouseSobreSidebar}) {
    return (
        <ChevronDownIcon
            className={`downIcon${mouseSobreSidebar ? 'sobre' : ''}`}
            style={{ cursor: 'pointer', height: '20px', width: '20px' }}
        />
    )
}
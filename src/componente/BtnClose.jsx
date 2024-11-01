import React from 'react';
import '../assets/styles/Sidebar/sidebar.scss';
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";
export default function BtnClose({onClick, mouseSobreSidebar}){
    return(
        <DoubleArrowLeftIcon 
        onClick={onClick} 
        className={`btn-close ${mouseSobreSidebar ? 'sobre' : ''}`}
        style={{ cursor: 'pointer', height:'20px', width:'20px' }}/>
    )
}
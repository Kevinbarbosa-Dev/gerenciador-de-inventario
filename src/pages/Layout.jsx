// Layout.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    SideBar,
    SideBarHeader,
    SideBarMain,
    SideBarNav,
    SideBarNavMain,
    SideBarNavLink,
    SideBarFooter,
    SideBarFooterLink
} from '../componente/SideBar';
import Dashboard from './Dashboard';
import Settings from './Settings';
import '../assets/styles/App.scss';
import { DashboardIcon, GearIcon, ReaderIcon, HomeIcon, ExitIcon } from "@radix-ui/react-icons";
import UserDropDown from '../componente/UserDropDown';
import Relatorio from './Relatorio';
import BtnClose from '../componente/BtnClose';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="app-container">
            <SideBar isOpen={isOpen}>
                <SideBarHeader>
                    <UserDropDown />
                    <BtnClose onClick={toggleSidebar} />
                </SideBarHeader>
                <SideBarMain>
                    <SideBarNav>
                        <SideBarNavMain>
                            <SideBarNavLink to="/dashboard">
                                <DashboardIcon /> Dashboard
                            </SideBarNavLink>
                            <SideBarNavLink to="/Relatorio">
                                <ReaderIcon /> Relatório
                            </SideBarNavLink>
                            <SideBarNavLink to="/settings">
                                <GearIcon /> Configuração
                            </SideBarNavLink>
                        </SideBarNavMain>
                    </SideBarNav>
                    <SideBarNav>
                        <SideBarNavMain>
                            <SideBarNavLink to={"/"}>
                                <HomeIcon /> Site
                            </SideBarNavLink>
                        </SideBarNavMain>
                    </SideBarNav>
                </SideBarMain>
                <SideBarFooter>
                    <SideBarFooterLink to="/">
                        <ExitIcon /> Sair
                    </SideBarFooterLink>
                </SideBarFooter>
            </SideBar>

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/relatorio" element={<Relatorio />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </main>
        </div>
    );
}

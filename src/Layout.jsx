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
} from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Relatorio from './pages/Relatorio';
import '../src/assets/styles/App.css';
import { DashboardIcon, GearIcon, ReaderIcon, HomeIcon} from "@radix-ui/react-icons";
import UserDropDown, { SetaBaixa } from './components/UserDropDown';
import BtnOpen from './components/BtnOpen';
import BtnClose from './components/BtnClose';


export default function Layout() {
    const [sidebarIsOpen, setIsOpen] = useState(true);
    const [mouseSobreSidebar, setmouseSobreSidebar] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!sidebarIsOpen);
    };

    return (
        <div className={`app-container ${sidebarIsOpen ? '' : 'app-container-sidebar-closed'}`}>
            {!sidebarIsOpen && (
                <BtnOpen onClick={toggleSidebar} />
            )}

            <SideBar
                sidebarIsOpen={sidebarIsOpen}
                mouseDentro={() => setmouseSobreSidebar(true)}
                mouseFora={() => setmouseSobreSidebar(false)}
            >
                <SideBarHeader>
                    <div className='flex justify-center items-center gap-1'>
                        <UserDropDown />
                        <SetaBaixa mouseSobreSidebar={mouseSobreSidebar} />
                    </div>
                    <BtnClose onClick={toggleSidebar} mouseSobreSidebar={mouseSobreSidebar} />
                </SideBarHeader>
                <SideBarMain>
                    <SideBarNav>
                        <SideBarNavMain>
                            <SideBarNavLink to="/dashboard">
                                <DashboardIcon /> Dashboard
                            </SideBarNavLink>
                            <SideBarNavLink to="/relatorio">
                                <ReaderIcon /> Relatório
                            </SideBarNavLink>
                            <SideBarNavLink to="/settings">
                                <GearIcon /> Configuração
                            </SideBarNavLink>
                        </SideBarNavMain>
                    </SideBarNav>
                </SideBarMain>
                <SideBarFooter>
                    <SideBarFooterLink to={"/"}>
                        <HomeIcon /> Site
                    </SideBarFooterLink>
                </SideBarFooter>
            </SideBar>

            <main className={`main-content ${sidebarIsOpen ? '' : 'active'}`}>
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

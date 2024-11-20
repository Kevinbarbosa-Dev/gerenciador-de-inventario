import React, { useState, useLayoutEffect } from 'react';
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
import '../src/assets/styles/App.css';
import { DashboardIcon, GearIcon } from "@radix-ui/react-icons";
import UserDropDown from './components/UserDropDown';
import BtnOpen from './components/BtnOpen';
import BtnClose from './components/BtnClose';

export default function Layout() {
    const [sidebarIsOpen, setIsOpen] = useState(true);
    const [mouseSobreSidebar, setmouseSobreSidebar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useLayoutEffect(() => {
        if (windowWidth <= 768) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    const toggleSidebar = () => {
        setIsOpen(!sidebarIsOpen);
    };

    return (
        <body className='bg-gray-100 dark:bg-[#262626]'>
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
                        <UserDropDown mouseSobreSidebar={mouseSobreSidebar} />
                    </div>
                    <BtnClose onClick={toggleSidebar} mouseSobreSidebar={mouseSobreSidebar} />
                </SideBarHeader>
                <SideBarMain>
                    <SideBarNav>
                        <SideBarNavMain>
                            <SideBarNavLink to={"/app/dashboard"}>
                                <DashboardIcon /> Dashboard
                            </SideBarNavLink>
                            <SideBarNavLink to={"/app/settings"}>
                                <GearIcon /> Configuração
                            </SideBarNavLink>
                        </SideBarNavMain>
                    </SideBarNav>
                </SideBarMain>
                <SideBarFooter>
                    <SideBarFooterLink to="/">
                        <img src="./src/assets/img/favicon-32x32.png" /> Stock
                    </SideBarFooterLink>
                </SideBarFooter>
            </SideBar>

            <main className={`transition-[margin-left] duration-300 ease-out flex justify-center items-center h-full ${sidebarIsOpen ? '' : 'w-full'
                }`}>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="settings" element={<Settings />} />
                </Routes>
            </main>
        </div>
        </body>
    );
}

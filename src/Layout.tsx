"use client";

import { useState, useLayoutEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import {
  SideBar,
  SideBarHeader,
  SideBarMain,
  SideBarNav,
  SideBarNavMain,
  SideBarNavLink,
  SideBarFooter,
  SideBarFooterLink,
} from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import "../src/assets/styles/App.css";
import { DashboardIcon, GearIcon } from "@radix-ui/react-icons";
import UserDropDown from "./components/UserDropDown";
import { useIsMobile } from "./hooks/useIsMobile";
import ToggleButton from "./hooks/ToggleButton";


export default function Layout() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
  const [mouseSobreSidebar, setMouseSobreSidebar] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useLayoutEffect(() => {
    if (windowWidth > 768) {
      setSidebarIsOpen(true);
    } else {
      setSidebarIsOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, handleResize]);
  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  const isMobile = useIsMobile()

  return (
    <div className="bg-gray-100 dark:bg-[#262626] min-h-screen">
      <div
        className={`app-container 
      ${sidebarIsOpen ? "" : "app-container-sidebar-closed"}`}
      >
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity 
          ${sidebarIsOpen && isMobile ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={toggleSidebar}
        />
        {!sidebarIsOpen && !isMobile &&
          <ToggleButton
            isOpen={sidebarIsOpen}
            onClick={toggleSidebar} />}
        {!isMobile && (
          <SideBar
            sidebarIsOpen={sidebarIsOpen}
            mouseDentro={() => setMouseSobreSidebar(true)}
            mouseFora={() => setMouseSobreSidebar(false)}
            isMobile={isMobile}
          >
            <SideBarHeader>
              <div className="flex justify-center items-center gap-1">
                <UserDropDown mouseSobreSidebar={mouseSobreSidebar} />
              </div>
              <ToggleButton
                isOpen={sidebarIsOpen}
                onClick={toggleSidebar}
                size={20}
                mouseSobreSidebar={mouseSobreSidebar}
              />

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
                <img src="./imagem/favicon-32x32.png" alt="Logo" />
                Stock
              </SideBarFooterLink>
            </SideBarFooter>
          </SideBar>
        )}
        <main
          className={`transition-[margin-left] duration-300 ease-out flex justify-center items-center h-full 
            ${sidebarIsOpen && !isMobile ? "" : "w-full"}`}
        >
          <Routes>
            <Route
              path="dashboard"
              element={<Dashboard open={open} setOpen={setOpen} />}
            />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

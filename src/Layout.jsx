"use client"

import { useState, useLayoutEffect, useCallback } from "react"
import { Route, Routes } from "react-router-dom"
import {
  SideBar,
  SideBarHeader,
  SideBarMain,
  SideBarNav,
  SideBarNavMain,
  SideBarNavLink,
  SideBarFooter,
  SideBarFooterLink,
} from "./components/SideBar"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import "../src/assets/styles/App.css"
import { DashboardIcon, GearIcon } from "@radix-ui/react-icons"
import UserDropDown from "./components/UserDropDown"
import BtnOpen from "./components/BtnOpen"
import BtnClose from "./components/BtnClose"

export default function Layout() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [mouseSobreSidebar, setMouseSobreSidebar] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useLayoutEffect(() => {
    if (windowWidth > 768) {
      setSidebarIsOpen(true)
    } else {
      setSidebarIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [windowWidth, handleResize])

  const toggleSidebar = useCallback(() => {
    setSidebarIsOpen((prevState) => !prevState)
  }, [])

  const isMobile = windowWidth <= 425

  return (
    <div className="bg-gray-100 dark:bg-[#262626] min-h-screen">
      <div className={`app-container ${sidebarIsOpen ? "" : "app-container-sidebar-closed"}`}>
        {!sidebarIsOpen && (
          <div className={`fixed top-0 left-0 z-50 p-4 ${isMobile ? "" : "md:p-2"}`}>
            <BtnOpen onClick={toggleSidebar} />
          </div>
        )}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${sidebarIsOpen && isMobile ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => isMobile && setSidebarIsOpen(false)}
        />

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
            {(isMobile || mouseSobreSidebar) && <BtnClose onClick={toggleSidebar} mouseSobreSidebar={true} />}
          </SideBarHeader>
          <SideBarMain>
            <SideBarNav>
              <SideBarNavMain>
                <SideBarNavLink to={"/app/dashboard"} onClick={() => isMobile && toggleSidebar()}>
                  <DashboardIcon /> Dashboard
                </SideBarNavLink>
                <SideBarNavLink to={"/app/settings"} onClick={() => isMobile && toggleSidebar()}>
                  <GearIcon /> Configuração
                </SideBarNavLink>
              </SideBarNavMain>
            </SideBarNav>
          </SideBarMain>
          <SideBarFooter>
            <SideBarFooterLink to="/">
              <img src="./src/assets/img/favicon-32x32.png" alt="Logo" /> Stock
            </SideBarFooterLink>
          </SideBarFooter>
        </SideBar>

        <main
          className={`transition-[margin-left] duration-300 ease-out flex justify-center items-center h-full ${sidebarIsOpen && !isMobile ? "" : "w-full"}`}
        >
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}


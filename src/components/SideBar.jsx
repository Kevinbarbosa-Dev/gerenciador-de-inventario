import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Sidebar/sidebar.scss';


export function SideBar({ children, sidebarIsOpen, mouseDentro, mouseFora }) {
    return (
        <aside
            className={`sidebar ${sidebarIsOpen ? 'open' : 'closed'}`}
            onMouseEnter={mouseDentro}
            onMouseLeave={mouseFora}
        >
            {children}
        </aside>
    );
}

export function SideBarHeader({ children }) {
    return (
        <header className="px-6 py-5 flex justify-between transition-all duration-300 hover:bg-gray-100 ">
            {children}
        </header>
    );
}

export function SideBarMain({ children }) {
    return (
        <main className="px-3 flex  items-center h-full">
            {children}
        </main>
    );
}

export function SideBarNav({ children }) {
    return (
        <nav className='w-full'>
            {children}
        </nav>
    );
}

export function SideBarNavHeader({ children }) {
    return <header className="sidebar-nav-header">{children}</header>;
}

export function SideBarNavTitle({ children }) {
    return <h4 className="sidebar-nav-title">{children}</h4>;
}

export function SideBarNavMain({ children }) {
    return <main className="flex flex-col">{children}</main>;
}

export function SideBarNavLink({ children, to }) {
    return (
        <Link
            className="flex items-center mb-2.5 no-underline text-black text-sm px-3 py-2 gap-3 rounded-lg transition-all duration-300 hover:bg-gray-200"
            to={to}
        >
            {children}
        </Link>
    );
}

export function SideBarFooter({ children }) {
    return (
        <footer className="px-6 py-5">
            {children}
        </footer>
    );
}

export function SideBarFooterLink({ children, to }) {
    return (
        <Link
            className="flex items-center gap-3 no-underline text-black"
            to={to}
        >
            {children}
        </Link>
    );
}
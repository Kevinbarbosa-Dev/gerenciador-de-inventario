import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Sidebar/sidebar.scss';


export function SideBar({ children, isOpen, mouseDentro, mouseFora }) {
    return (
        <aside 
            className={`sidebar ${isOpen ? 'open' : 'closed'}`}
            onMouseEnter={mouseDentro} 
            onMouseLeave={mouseFora}
        >
            {children}
        </aside>
    );
}

export function SideBarHeader({ children }) {
    return <header className="sidebar-header">{children}</header>;
}

export function SideBarMain({ children }) {
    return <main className="sidebar-main">{children}</main>;
}

export function SideBarNav({ children }) {
    return <nav className="sidebar-nav">{children}</nav>;
}

export function SideBarNavHeader({ children }) {
    return <header className="sidebar-nav-header">{children}</header>;
}

export function SideBarNavTitle({ children }) {
    return <h4 className="sidebar-nav-title">{children}</h4>;
}

export function SideBarNavMain({ children }) {
    return <main className="sidebar-nav-main">{children}</main>;
}

export function SideBarNavLink({ children, to }) {
    return (
        <Link className="sidebar-nav-link" to={to}>
            {children}
        </Link>
    );
}

export function SideBarFooter({ children }) {
    return <footer className="sidebar-footer">{children}</footer>;
}

export function SideBarFooterLink({ children, to }) {
    return (
        <Link className="sidebar-footer-link" to={to}>
            {children}
        </Link>
    );
}

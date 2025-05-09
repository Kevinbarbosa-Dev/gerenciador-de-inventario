import { Link } from 'react-router-dom';
import '../assets/styles/Sidebar/sidebar.css';

interface SideBarProps {
    children: React.ReactNode;
    sidebarIsOpen: boolean;
    mouseDentro: () => void;
    mouseFora: () => void;
    isMobile: boolean;
}

interface ChildrenProps {
    children: React.ReactNode;
}

interface LinkProps extends ChildrenProps {
    to: string;
}

export function SideBar({ children, sidebarIsOpen, mouseDentro, mouseFora, isMobile }: SideBarProps) {
    return (
        <aside
            className={`
                ${sidebarIsOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
                ${isMobile ? 'fixed inset-y-0 left-0 z-50 w-64 shadow-lg' : ''}
                flex flex-col transition-all duration-300 ease-in-out bg-gray-200 border-gray-300 dark:bg-[#202020] dark:border-[#303030] border-r
            `}
            onMouseEnter={mouseDentro}
            onMouseLeave={mouseFora}
        >
            {children}
        </aside>
    );
}

export function SideBarHeader({ children }: ChildrenProps) {
    return (
        <header className="px-6 py-5 flex justify-between transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">
            {children}
        </header>
    );
}

export function SideBarMain({ children }: ChildrenProps) {
    return (
        <main className="px-3 flex items-center h-full dark:text-gray-300">
            {children}
        </main>
    );
}

export function SideBarNav({ children }: ChildrenProps) {
    return (
        <nav className="w-full">
            {children}
        </nav>
    );
}

export function SideBarNavHeader({ children }: ChildrenProps) {
    return <header className="sidebar-nav-header dark:text-gray-400">{children}</header>;
}

export function SideBarNavTitle({ children }: ChildrenProps) {
    return <h4 className="sidebar-nav-title dark:text-gray-300">{children}</h4>;
}

export function SideBarNavMain({ children }: ChildrenProps) {
    return <main className="flex flex-col">{children}</main>;
}

export function SideBarNavLink({ children, to }: LinkProps) {
    return (
        <Link
            className="flex items-center mb-2.5 no-underline text-black dark:text-gray-200 text-sm px-3 py-2 gap-3 rounded-lg transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            to={to}
        >
            {children}
        </Link>
    );
}

export function SideBarFooter({ children }: ChildrenProps) {
    return (
        <footer className="px-6 py-5 dark:text-gray-400">
            {children}
        </footer>
    );
}

export function SideBarFooterLink({ children, to }: LinkProps) {
    return (
        <Link
            className="flex items-center gap-3 no-underline text-black dark:text-gray-300"
            to={to}
        >
            {children}
        </Link>
    );
}
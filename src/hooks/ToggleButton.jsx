import { HamburgerMenuIcon, DoubleArrowLeftIcon } from "@radix-ui/react-icons"

export default function ToggleButton({ isOpen, onClick, size = 20 }) {
    const Icon = isOpen ? DoubleArrowLeftIcon : HamburgerMenuIcon

    return (
        <div className="sidebar-toggle-btn" onClick={onClick}>
            <Icon style={{ height: size, width: size }} />
        </div>
    )
}

import { HamburgerMenuIcon, DoubleArrowLeftIcon } from "@radix-ui/react-icons"

interface ToggleButtonProps {
    isOpen: boolean
    onClick: () => void
    size?: number
    mouseSobreSidebar?: boolean
}

export default function ToggleButton({ isOpen, onClick, size = 20, mouseSobreSidebar }: ToggleButtonProps) {
    if (isOpen) {
        return (
            <DoubleArrowLeftIcon
                onClick={onClick}
                className={`btn-close ${mouseSobreSidebar ? 'sobre' : ''}`}
                style={{ cursor: 'pointer', height: size, width: size }}
            />
        )
    }

    return (
        <div
            className="absolute top-4 left-4 z-10 rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={onClick}
        >
            <HamburgerMenuIcon style={{ cursor: 'pointer', height: size, width: size }} />
        </div>
    )
}

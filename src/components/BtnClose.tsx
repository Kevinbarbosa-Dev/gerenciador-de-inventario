import '../assets/styles/Sidebar/sidebar.css';
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";
interface BtnCloseProps {
    onClick: () => void;
    mouseSobreSidebar: boolean;
}
export default function BtnClose({ onClick, mouseSobreSidebar }: BtnCloseProps) {
    return (
        <DoubleArrowLeftIcon
            onClick={onClick}
            className={`btn-close ${mouseSobreSidebar ? 'sobre' : ''}`}
            style={{ cursor: 'pointer', height: '20px', width: '20px' }} />
    )
}
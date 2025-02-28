import { Home, Settings, PlusCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BottomNavProps {
    setOpen: (isOpen: boolean) => void
}

// TODO: no mobile faça com que quando eu mudar para o dashboard, tenha um tempo de pause que servi-ra para carregar a tabela e modifica-la para card, quando acabar a tela aparece

export default function BottomNav({ setOpen }: BottomNavProps) {
    const navigate = useNavigate()
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-opacity-80 backdrop-blur-sm shadow-lg">
            <div className="flex justify-around items-center h-16">
                <div className="flex flex-col items-center cursor-pointer"
                    onClick={() => navigate('/app/dashboard')}>
                    <Home size={24} />
                    <span className="text-xs">Home</span>
                </div>
                <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <PlusCircleIcon size={24} />
                    <span className="text-xs">Add</span>
                </div>
                <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => navigate('/app/settings')}
                >
                    <Settings size={24} />
                    <span className="text-xs">Settings</span>
                </div>
            </div>
        </nav>
    )
}
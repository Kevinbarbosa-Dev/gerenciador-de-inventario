import { Home, Settings, PlusCircleIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function BottomNav({ setIsOpen }) {
    const navigate = useNavigate()
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-opacity-80 backdrop-blur-sm shadow-lg">
            <div className="flex justify-around items-center h-16">
                <div className="flex flex-col items-center">
                    <Home size={24} />
                    <span
                        className="text-xs"
                        onClick={() => navigate('/app/dashboard')}>Home</span>
                </div>
                <div className="flex flex-col items-center">
                    <PlusCircleIcon size={24} />
                    <span
                        className="text-xs"
                        onClick={() => setIsOpen(true)}>Add</span>
                </div>
                <div className="flex flex-col items-center">
                    <Settings size={24} />
                    <span className="text-xs" to={"/app/settings"} onClick={() => navigate('/app/settings')}>Settings</span>
                </div>
            </div>
        </nav>
    )
}
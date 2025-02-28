import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
interface LinkProps {
    to: string;
}
export default function BtnBack({ to }: LinkProps) {
    return (
        <Link to={to} className="flex items-center mb-2.5 no-underline   rounded transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 w-6">
            <ArrowLeft
                style={{ cursor: 'pointer' }}
            />
        </Link>
    )
}
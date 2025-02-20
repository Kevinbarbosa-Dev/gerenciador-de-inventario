import { Bell } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export default function Notification({ t }) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Label htmlFor="stock-alerts" className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>{t.lowStockAlert}</span>
                </Label>
                <Switch id="stock-alerts" className="dark:border-[#303030]" />
            </div>
        </div>
    )
}
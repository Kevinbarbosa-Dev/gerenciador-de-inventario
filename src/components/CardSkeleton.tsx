import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Skeleton } from "../components/ui/skaleton"

export function CardSkeleton() {
    return (
        <Card className="bg-gray-100 border-gray-300 dark:bg-[#202020] dark:border-[#303030]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-5 w-1/3" />
                <div className="flex justify-end items-center gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-4">
                    <div className="w-full">
                        <Skeleton className="h-7 w-1/3 mb-2" />
                        <Skeleton className="h-4 w-1/2 mb-1" />
                        <Skeleton className="h-4 w-2/3 mb-1" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


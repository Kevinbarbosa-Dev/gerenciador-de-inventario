import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Skeleton } from "../components/ui/skaleton"
export function CardSkeleton() {
    return (
        <Card>
            <CardHeader className="pb-2">
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-8 w-1/3 mb-2" />
                <Skeleton className="h-4 w-2/3" />
            </CardContent>
        </Card>
    )
}


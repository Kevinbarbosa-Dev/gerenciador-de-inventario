import { Skeleton } from "./ui/skaleton"

export function ImageSkeleton() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Skeleton className="w-full h-[287px] rounded-lg" />
        </div>
    )
}


import { useState, useEffect } from "react";

export function useLoading(timeout: number = 2000, startImmediately: boolean = false) {
    const [isLoading, setIsLoading] = useState<boolean>(startImmediately);

    const handleLoading = (callback?: () => void) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (callback) callback();
        }, timeout);
    };

    useEffect(() => {
        if (startImmediately) {
            handleLoading();
        }
    }, []);

    return { isLoading, handleLoading };
}

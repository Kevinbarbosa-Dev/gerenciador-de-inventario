import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button"
import { useEffect, useState } from "react";

export default function BtnBackToTop() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const checarPosicaoDoScroll = () => {
        const deveEstarVisivel = window.scrollY > 300;
        setIsVisible(prev => (prev === deveEstarVisivel) ? prev : deveEstarVisivel);
    }

    const voltarAoTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", checarPosicaoDoScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", checarPosicaoDoScroll)
        }
    }, [])
    return (
        <>
            {isVisible && (
                <Button
                    className="fixed dark:bg-[#303030] dark:border-[#202020] dark:text-[#E8EAED] bottom-20 right-4 "
                    onClick={voltarAoTopo}>
                    <ArrowUpIcon />
                </Button>
            )}
        </>
    )
}
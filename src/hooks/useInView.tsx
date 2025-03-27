"use client"

import { useState, useEffect, useRef } from "react"

export function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false)
    const [hasLoaded, setHasLoaded] = useState(false)
    const ref = useRef(null)
    // IntersectionObserver: API nativa do navegador que observa quando um elemento entra ou sai da viewport
    // options: configuração da observação
    // ref: elemento que será observado
    // currentRef: elemento que está sendo observado
    // isIntersecting: indica se o elemento está visível na viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
                // Se o elemento está visível e ainda não foi carregado, marca como carregado
                if (entry.isIntersecting && !hasLoaded) {
                    setHasLoaded(true)
                }
            },
            {
                threshold: 0.1,
                ...options,
            },
        )

        const currentRef = ref.current

        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [hasLoaded, options])

    return { ref, isInView, hasLoaded }
}


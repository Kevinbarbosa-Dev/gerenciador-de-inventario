import { createContext, useContext, useState } from 'react'
import Translate from '@/components/settings/TranslateView'

const TranslationContext = createContext()

export function TranslationProvider({ children }) {
    const [language, setLanguage] = useState('pt-BR')

    const value = {
        t: Translate[language],
        language,
        setLanguage
    }

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    )
}

export const useTranslation = () => useContext(TranslationContext)

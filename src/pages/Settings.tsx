import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { useTheme } from "../components/ThemeProvider"
import { useTranslation } from "../components/settings/TranslationProvider"
import ThemeOptions from "../components/settings/ThemeOptions"
import FontSize from "../components/settings/FontSize"
import Language from "../components/settings/Language"
import CoinOptions from "../components/settings/CoinOptions"
import Notification from "../components/settings/Notification"
import BtnBack from "../components/BtnBack"
import { useIsMobile } from "../hooks/useIsMobile"


export default function Settings() {
  const { setTheme } = useTheme()
  const [fontSize, setFontSize] = useState<string>("medium")
  const { t, setLanguage } = useTranslation()

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    document.documentElement.lang = value
  }

  const handleFontSizeChange = (value: string) => {
    setFontSize(value)

    const fontSizes = {
      small: "14px",
      medium: "16px",
      large: "18px",
    }

    document.documentElement.style.fontSize = fontSizes[value as keyof typeof fontSizes]
  }
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-[#262626]">
      <div className="mx-auto max-w-6xl">
        <div className="custom-scrollbar h-screen overflow-y-auto px-4 py-6 lg:px-8">
          {isMobile && (
            <BtnBack to={"/app/dashboard"} />
          )}
          <div className="space-y-8">
            <Card className="dark:bg-[#262626] dark:border-[#303030]">
              <CardContent className="p-4 space-y-6">
                <h2 className="text-lg font-semibold pb-2 border-b border-border">{t.appearance}</h2>
                <div className="space-y-4">
                  <ThemeOptions t={t} setTheme={setTheme} />
                  <FontSize
                    t={t}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    handleFontSizeChange={handleFontSizeChange}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-[#262626] dark:border-[#303030]">
              <CardContent className="lg:p-6 p-4 space-y-6">
                <h2 className="text-lg font-semibold pb-2 border-b border-border">{t.language}</h2>
                <div className="space-y-4">
                  <Language t={t} handleLanguageChange={handleLanguageChange} />
                  <CoinOptions t={t} />
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-[#262626] dark:border-[#303030]">
              <CardContent className="lg:p-6 p-4 space-y-6">
                <h2 className="text-lg font-semibold pb-2 border-b border-border">{t.notification}</h2>
                <Notification t={t} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


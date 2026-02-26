'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, Translations } from './translations'

interface I18nContextType {
  lang: Lang
  t: Translations
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
  }

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)

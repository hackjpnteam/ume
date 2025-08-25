'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ja' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  ja: {
    // Header
    'nav.home': 'ホーム',
    'nav.umeboshi': '中峰園の梅干し',
    'nav.kodawari': 'こだわり',
    'nav.products': '商品情報',
    'nav.contact': 'お問い合わせ',
    
    // Hero Section
    'hero.kodawari': 'KODAWARI',
    'hero.title': '紀州・中峰農園の梅干し',
    'hero.description1': '中峰農園の梅干しは、紀州南高梅を厳選し、伝統製法で丁寧に仕上げています。',
    'hero.description2': '塩分濃度と熟成期間を徹底管理し、梅本来の酸味と旨味を引き出します。天日干しでは「塩の花」と呼ばれる結晶が生まれ、旨味の証となります。',
    'hero.viewProducts': '商品を見る',
    'hero.aboutFarm': '農園について',
    
    // Features Section
    'features.title': '中峰農園の特徴',
    'features.subtitle': '伝統的な製法と現代的な品質管理が生み出す、こだわりの梅干し',
    'features.viewMore': '詳しく見る',
    
    // Kodawari Section
    'kodawari.title1': '梅の風味を贅沢に',
    'kodawari.title2': '引き出した絶品梅干し',
    'kodawari.since': 'Since 1994'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.umeboshi': 'Our Umeboshi',
    'nav.kodawari': 'Our Commitment',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.kodawari': 'KODAWARI',
    'hero.title': 'Premium Umeboshi from Kishu Nakamine Farm',
    'hero.description1': 'Our umeboshi are carefully crafted using selected Kishu Nanko plums with traditional methods.',
    'hero.description2': 'We meticulously manage salt concentration and aging periods to bring out the natural acidity and umami of plums. The sun-drying process creates "shio no hana" (salt flowers), crystals that are proof of concentrated umami.',
    'hero.viewProducts': 'View Products',
    'hero.aboutFarm': 'About Our Farm',
    
    // Features Section
    'features.title': 'Nakamine Farm Features',
    'features.subtitle': 'Traditional methods combined with modern quality control create our exceptional umeboshi',
    'features.viewMore': 'Learn More',
    
    // Kodawari Section
    'kodawari.title1': 'Luxuriously extracting',
    'kodawari.title2': 'the finest plum flavors',
    'kodawari.since': 'Since 1994'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
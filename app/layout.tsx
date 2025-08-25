import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'

export const metadata: Metadata = {
  title: '株式会社中峰農園 | 紀州・中峰農園の梅干し',
  description:
    '紀州・中峰農園は和歌山県の山間部で代々続く梅農家です。伝統的な製法を守りながら、現代の技術を取り入れ、最高品質の梅干しをお届けしています。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

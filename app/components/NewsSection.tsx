import Link from 'next/link'

export default function NewsSection() {
  const newsItems = [
    {
      date: '2024.03.15',
      title: '春の新商品「桜花梅干し」の販売を開始しました',
    },
    {
      date: '2024.02.28',
      title: '第47回全国梅干し品評会で最優秀賞を受賞しました',
    },
    {
      date: '2024.02.10',
      title: 'オンラインショップリニューアルのお知らせ',
    },
    {
      date: '2024.01.20',
      title: '梅干し作り体験教室の参加者募集を開始しました',
    },
    {
      date: '2024.01.05',
      title: '新年のご挨拶と冬季限定商品のご案内',
    },
  ]

  return (
    <section className="py-20 bg-paper">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold font-noto-serif mb-12 text-center">
          News
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {newsItems.map((item, index) => (
              <li key={index} className="border-b border-gray-300 pb-6">
                <Link href="#" className="flex flex-col sm:flex-row sm:items-center gap-4 group hover:opacity-70 transition-opacity">
                  <span className="text-sm text-gray-600 font-medium shrink-0">
                    {item.date}
                  </span>
                  <span className="text-base text-ink line-clamp-1">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 text-center">
            <Link 
              href="#"
              className="inline-flex items-center gap-3 group"
            >
              <span className="text-sm font-medium">もっと見る</span>
              <div className="w-10 h-10 bg-accent-red rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                <svg 
                  className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
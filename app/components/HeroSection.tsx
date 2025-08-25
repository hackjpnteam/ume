import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-yellow-300 to-yellow-500 relative overflow-hidden">
      {/* 簡単な装飾 */}
      <div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white opacity-10"
        style={{ fontSize: '36rem' }}
      >
        🌸
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <p className="text-red-800 text-sm font-medium mb-4 tracking-wider">Kodawari</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  紀州・中峰農園の
                  <br className="sm:hidden" />
                  梅干し
                </h1>
              </div>

              <div className="text-gray-800 leading-loose space-y-4">
                <p className="text-lg">
                  厳選された紀州南高梅、
                  <br className="sm:hidden" />
                  伝統の技で磨き上げ。
                </p>
                <p className="text-lg">
                  天日干しで浮かぶ「塩の花」が
                  <br className="sm:hidden" />
                  旨味の証。
                </p>
                <p className="text-lg font-medium">
                  ようやく辿り着いた、
                  <br className="sm:hidden" />
                  ここにしかない梅干し。
                </p>
              </div>

              <Link
                href="#about"
                className="inline-flex items-center text-red-800 hover:text-red-900 px-6 py-3 rounded-full bg-white shadow-md font-medium"
              >
                <div className="w-8 h-8 border-2 border-red-800 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                詳しく見る
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px]">
                <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/umeboshi.webp"
                    alt="中峰農園の梅干し"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

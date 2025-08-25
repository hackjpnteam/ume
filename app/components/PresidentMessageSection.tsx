'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function PresidentMessageSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-neutral-100 via-white to-primary-50/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div
              className={`relative transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
              }`}
            >
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary-200/30 to-primary-300/20 rounded-[4rem] blur-3xl"></div>

                {/* Image container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[3rem] p-2 shadow-floating border border-white/40">
                  <div className="h-[400px] sm:h-[500px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                    <div className="text-center text-neutral-400">
                      <div className="text-6xl mb-4">👨‍🌾</div>
                      <p className="text-lg font-medium">社長写真</p>
                      <p className="text-sm">（準備中）</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-amber/20 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
            >
              {/* Header */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 mb-6">
                  <span className="text-primary-700 text-sm font-medium tracking-wide">
                    MESSAGE
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-noto-serif font-bold gradient-text leading-tight">
                  社長あいさつ
                </h2>
              </div>

              {/* Message content */}
              <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
                <p
                  className={`transform transition-all duration-1000 delay-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  ここ紀州田辺市の上秋津は温暖な土地柄で昔から梅とみかんの農家が多く、
                  私も梅農家として梅干づくりに励んでまいりました。
                </p>

                <p
                  className={`transform transition-all duration-1000 delay-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  そんな中で梅干の加工販売を本格的に手がけるようになってもう20年程になります。
                </p>

                <p
                  className={`transform transition-all duration-1000 delay-900 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  １人１人のお客様の声に耳を傾け、つながりを大切にしていきたいと思っております。
                </p>

                <div
                  className={`bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white shadow-floating transform transition-all duration-1000 delay-1100 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                ></div>
              </div>

              {/* Signature */}
              <div
                className={`pt-6 border-t border-neutral-200 transform transition-all duration-1000 delay-1300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="text-right">
                  <div className="text-xl font-noto-serif font-bold gradient-text mb-1">
                    中峰農園 代表
                  </div>
                  <div className="text-3xl font-noto-serif font-bold text-neutral-700">
                    中峰 千世子
                  </div>
                  <div className="text-sm text-neutral-500 mt-2">Since 1994</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

export default function CompanyInfoSection() {
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

  const companyData = [
    { label: '会社名', value: '株式会社中峰農園' },
    { label: '郵便番号', value: '〒646-0001' },
    { label: '所在地', value: '和歌山県田辺市上秋津2419' },
    { label: '電話番号', value: '0739-35-0092' },
    { label: 'FAX', value: '0739-35-0082' },
    { label: 'フリーダイヤル', value: '0120-35-0880' },
    { label: '会社設立', value: '平成6年' },
    { label: '資本金', value: '1,000万円' },
    { label: '代表取締役', value: '中峰 千世子' },
    { label: '事業内容', value: '梅干の栽培、加工、販売' },
    { label: '社員数', value: '23名' },
    { label: '取引銀行', value: '紀陽銀行' },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 mb-6">
              <span className="text-primary-700 text-sm font-medium tracking-wide">COMPANY</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-noto-serif font-bold gradient-text mb-6">
              会社概要
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              1994年の設立以来、紀州田辺の地で梅干作りに情熱を注いでいます
            </p>
          </div>

          {/* Company Info Grid */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-floating border border-white/20 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companyData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row sm:items-center py-4 border-b border-neutral-100 last:border-b-0 transform transition-all duration-1000 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-neutral-500 text-sm font-medium mb-1 sm:mb-0 sm:w-32 sm:flex-shrink-0">
                    {item.label}
                  </div>
                  <div className="text-neutral-800 font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            {/* Phone Contact */}
            <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-8 text-white shadow-2xl group hover:shadow-3xl hover:from-pink-500 hover:to-rose-600 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                  <div className="text-2xl">🌸</div>
                </div>
                <h3 className="text-2xl font-noto-serif font-bold">お電話でのお問い合わせ</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm opacity-80">フリーダイヤル</div>
                  <div className="text-3xl font-bold">0120-35-0880</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">代表</div>
                  <div className="text-xl font-semibold">0739-35-0092</div>
                </div>
                <div className="text-sm opacity-90 mt-4">営業時間: 平日 9:00〜17:00</div>
              </div>
            </div>

            {/* Address/Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-floating border border-white/20 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-noto-serif font-bold gradient-text">
                  所在地・アクセス
                </h3>
              </div>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <div className="font-semibold text-lg">〒646-0001</div>
                  <div className="text-lg">和歌山県田辺市上秋津2419</div>
                </div>
                <div className="text-sm leading-relaxed">
                  紀州田辺の温暖な気候に恵まれた梅とみかんの産地にございます。
                  お車でお越しの際は事前にご連絡ください。
                </div>
                <div className="pt-4">
                  <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/btn">
                    <span>Google マップで見る</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

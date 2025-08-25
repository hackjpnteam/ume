import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              中峰農園について
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/farm-aerial.webp"
                alt="中峰農園の航空写真"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                伝統と革新の融合
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  ここ、温暖な気候に恵まれた梅の産地である南紀は、昔から梅とみかんの栽培が盛んな地域です。
                </p>
                <p>
                  私たちはこの地で、梅の栽培から梅干し作りまで一貫して行い、20年以上にわたり丹精を込めて梅干しを作り続けて参りました。
                </p>
                <p>
                  自然の恵みを最大限に活かした、こだわりの梅干しをぜひご賞味ください。
                </p>
              </div>

              <Link 
                href="#features"
                className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
              >
                特徴を詳しく見る
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
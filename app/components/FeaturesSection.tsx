import Image from 'next/image'

export default function FeaturesSection() {
  const features = [
    {
      title: '伝統の製法',
      description: '代々受け継がれてきた伝統的な梅干し作りの技法を大切にしながら、現代の品質管理技術を融合。',
      image: '/images/umeboshi.webp'
    },
    {
      title: '広大な農園',
      description: '紀州の温暖な気候と豊かな土壌に恵まれた広大な農園で、のびのびと育った南高梅。',
      image: '/images/umeboshi.webp'
    },
    {
      title: '品質へのこだわり',
      description: '厳選した梅の実を使用し、じっくりと熟成させた逸品です。',
      image: '/images/umeboshi.webp'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 relative">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-red-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-100/20 rounded-full blur-2xl"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            こだわりの特長
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            伝統的な製法と現代的な品質管理が生み出す、こだわりの梅干し
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
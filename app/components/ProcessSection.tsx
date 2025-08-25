export default function ProcessSection() {
  const processes = [
    {
      title: '開花',
      period: '2月初旬',
      description: '梅畑はいっせいに花が咲き観梅などの催し等がある梅林もあります。',
      icon: '🌸'
    },
    {
      title: '収穫',
      period: '梅雨時期',
      description: '実がなり収穫の時期は蒸し暑い梅雨時期です。',
      icon: '🟢'
    },
    {
      title: '天日干し',
      period: '夏',
      description: '夏になると炎天下でじっくり天日干しします。',
      icon: '☀️'
    },
    {
      title: '出荷',
      period: '秋',
      description: '漬け込みをへて丁寧にパック詰作業が行われます。',
      icon: '📦'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-yellow-200/30 to-amber-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-gradient-to-br from-orange-200/25 to-yellow-200/15 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            製法工程
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            梅の樹の栽培から、開花、結実まで真心込めて見守り続けてきた、良質の梅の実を愛情と共に樽に漬け込み、
            三日三晩天日干しの末やっと出来上がった梅干です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processes.map((process, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{process.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-red-600 font-semibold mb-3 text-sm">{process.period}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">生まれも育ちも農家です</h3>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p>
              当農園自慢の梅干《農家の梅》は、梅の樹の栽培から、開花、結実まで真心込めて見守り続けてきた、
              良質の梅の実を愛情と共に樽に漬け込み、三日三晩天日干しの末やっと出来上がった梅干です。
            </p>
            <p>
              えもいわれぬ羽二重餅のような歯ざわりとキメの細かさ、味と香り、
              更に梅の風味を生かしながら、適度のうす塩風味に仕上げております。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
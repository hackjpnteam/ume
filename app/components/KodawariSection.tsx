export default function KodawariSection() {
  return (
    <section id="kodawari" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 relative">
      {/* 微妙な背景パターン */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-200 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-200 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-200 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-red-200 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium tracking-wider">
              KODAWARI
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            梅の風味を贅沢に引き出した絶品梅干し
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              中峰農園の梅干しは、厳選された紀州南高梅を使用し、伝統的な製法にこだわって作られています。
            </p>
            <p>
              天日干しの工程では、「塩の花」と呼ばれる白い結晶が現れるまで、じっくりと時間をかけます。
            </p>
            <p>
              紫蘇は自家栽培のものを使用し、最適なタイミングで漬け込みます。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
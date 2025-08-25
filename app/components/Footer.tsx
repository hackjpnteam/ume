import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              中峰農園
            </h3>
            <p className="text-gray-300 leading-relaxed">
              1994年より続く、紀州の伝統的な梅干し作りを守り続けています。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-4">
              サイトマップ
            </h4>
            <nav className="space-y-2">
              {[
                { label: 'ホーム', href: '/' },
                { label: 'コンセプト', href: '#about' },
                { label: 'こだわり', href: '#features' },
                { label: '製法', href: '#process' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="block text-gray-300 hover:text-red-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-4">
              お問い合わせ
            </h4>
            <div className="bg-white p-4 rounded-lg space-y-3">
              <div>
                <div className="font-semibold text-gray-800 mb-1">お電話でのお問い合わせ</div>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">フリーダイヤル</div>
                <div className="text-red-600 font-bold text-lg">0120-35-0880</div>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">代表</div>
                <div className="text-gray-800">0739-35-0092</div>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">FAX</div>
                <div className="text-gray-800">0739-35-0082</div>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">営業時間</div>
                <div className="text-gray-800">平日 9:00〜17:00</div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-4">
              所在地
            </h4>
            <div className="text-gray-300 space-y-2">
              <div>
                <div className="font-semibold text-white">株式会社中峰農園</div>
              </div>
              <div>
                <div>〒646-0001</div>
                <div>和歌山県田辺市上秋津2419</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">代表取締役</div>
                <div>中峰 千世子</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 中峰農園 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
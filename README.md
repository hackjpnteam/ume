# 株式会社中峰農園 公式ウェブサイト

紀州・中峰農園の公式ウェブサイトです。

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Noto Serif JP (日本語), Inter (英語)
- **Code Quality**: ESLint, Prettier
- **Image Optimization**: next/image

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。

## スクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを作成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードをチェック
- `npm run format` - Prettierでコードをフォーマット
- `npm run format:check` - フォーマットチェック

## プロジェクト構造

```
nakamine-farm/
├── app/
│   ├── components/
│   │   ├── Header.tsx         # ヘッダー（スクロール検知付き）
│   │   ├── HeroSection.tsx    # ヒーローセクション
│   │   ├── KodawariSection.tsx # こだわりセクション
│   │   ├── NewsSection.tsx    # ニュースセクション
│   │   └── Footer.tsx         # フッター
│   ├── globals.css            # グローバルスタイル
│   ├── layout.tsx             # ルートレイアウト
│   └── page.tsx               # ホームページ
├── public/
│   └── images/                # 画像ファイル
├── tailwind.config.ts         # Tailwind設定
├── tsconfig.json              # TypeScript設定
└── package.json               # プロジェクト設定
```

## 主な機能

### ヘッダー
- スクロール前は透明背景
- スクロール後は白背景に変化
- レスポンシブナビゲーション

### ヒーローセクション
- 左側に梅畑の写真エリア
- 右側にテキストコンテンツ
- CTAボタン付き

### こだわりセクション
- 背景に梅干しの写真
- 半透明の赤いカードオーバーレイ
- 伝統製法の説明

### ニュースセクション
- 日付付きニュースリスト
- ペーパー色の背景
- もっと見るボタン

### フッター
- 会社ロゴ
- 住所情報（英語表記）

## デプロイ

```bash
# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start
```

## ライセンス

© 2024 株式会社中峰農園 All rights reserved.
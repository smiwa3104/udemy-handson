import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",     // Pages Router の場合
    "./src/components/**/*.{js,ts,jsx,tsx}", // コンポーネントディレクトリ
    "./src/app/**/*.{js,ts,jsx,tsx}",       // App Router の場合
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
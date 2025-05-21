// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Можете добавить свои кастомные цвета, если нужно
        'brand-pink': '#EC4899', // Примерно красно-розовый
        'brand-cyan': '#22D3EE', // Примерно сине-бирюзовый
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: { // <--- ДОБАВЛЕНО
        ubuntu: ['Ubuntu', 'sans-serif'], // 'Ubuntu' - имя шрифта, 'sans-serif' - запасной вариант
      },
      // Если у вас есть анимации или ключевые кадры, они должны быть здесь
      // Например:
      // animation: {
      //   'pulse-slow': 'pulse-aurora 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      // },
      // keyframes: {
      //   'pulse-aurora': {
      //     '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
      //     '50%': { opacity: '1', transform: 'scale(1.05)' },
      //   },
      // }
    },
  },
  plugins: [],
};
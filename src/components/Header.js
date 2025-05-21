import Link from 'next/link';

export default function Header() {
  return (
    <header 
      className="bg-gray-900/80 backdrop-blur-md shadow-lg 
                 lg:sticky lg:top-0 lg:z-50  // Фиксация только на LG+
                 w-full" // Убедимся, что занимает всю ширину
    >
      <nav 
        className="container-custom mx-auto px-4 flex items-center justify-between py-4
                   lg:justify-between // На LG оставляем justify-between
                   justify-center     // На мобильных центрируем логотип (если ссылок нет)
                   "
      >
        <Link 
          href="/" 
          className="text-2xl font-bold text-brand-cyan"
        >
          Ритм<span className="text-brand-pink">Капсула</span>
        </Link>

        {/* Блок с навигационными ссылками и кнопкой - скрыт по умолчанию, виден на LG+ */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="#features" className="text-gray-300 hover:text-brand-cyan transition-colors">Возможности</Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-brand-cyan transition-colors">Как это работает</Link>
          <Link href="#pricing" className="text-gray-300 hover:text-brand-cyan transition-colors">Тарифы</Link>
          <Link href="#faq" className="text-gray-300 hover:text-brand-cyan transition-colors">FAQ</Link>
          <Link href="#demo" className="btn-secondary text-sm py-2 px-4">
            Демо Секвенсора
          </Link>
        </div>
      </nav>
    </header>
  );
}

// Убедитесь, что у вас определены стили для .container-custom, .btn-secondary, 
// и цвета brand-cyan, brand-pink в tailwind.config.js или globals.css

/*
Пример для .btn-secondary в globals.css:
.btn-secondary {
  @apply bg-transparent border border-brand-cyan text-brand-cyan font-semibold rounded-lg hover:bg-brand-cyan hover:text-gray-900 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-opacity-50;
}

Пример для container-custom в globals.css или tailwind.config.js:
.container-custom {
  @apply max-w-6xl; // или другая нужная вам ширина
}
*/

// В tailwind.config.js:
/*
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FF1E56', 
        'brand-cyan': '#00E0FF', 
      },
    },
  },
  plugins: [],
}
*/
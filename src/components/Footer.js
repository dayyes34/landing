// src/components/Footer.js
import Link from 'next/link';
// Можно импортировать иконки, если будете использовать, например, из react-icons
// import { FaTelegramPlane, FaVk, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 border-t border-gray-700/50"> {/* Строго черный фон и тонкая граница сверху */}
      <div 
        className="container-custom mx-auto w-full
                   px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 
                   py-10 sm:py-12 md:py-16" // Адаптивные отступы
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 sm:mb-6">
            <Link href="/" className="text-2xl sm:text-3xl font-bold text-brand-cyan hover:opacity-80 transition-opacity">
              Ритм<span className="text-brand-pink">Капсула</span>
            </Link>
          </div>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-400 max-w-md">
            Наделяем музыкантов мастерством ритма с помощью ИИ и сообщества.
          </p>
          <nav className="mb-6 sm:mb-8">
            <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-sm sm:text-base">
              <li><Link href="#features" className="hover:text-brand-cyan transition-colors">Возможности</Link></li>
              <li><Link href="#pricing" className="hover:text-brand-cyan transition-colors">Цены</Link></li>
              <li><Link href="#faq" className="hover:text-brand-cyan transition-colors">FAQ</Link></li>
              {/* <li><Link href="/privacy" className="hover:text-brand-cyan transition-colors">Политика</Link></li> */}
              {/* <li><Link href="/terms" className="hover:text-brand-cyan transition-colors">Условия</Link></li> */}
              <li><a href="mailto:your-email@example.com" className="hover:text-brand-cyan transition-colors">Контакты</a></li>
            </ul>
          </nav>

          {/* Опционально: Иконки соцсетей */}
          {/* <div className="flex justify-center space-x-5 mb-6 sm:mb-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors">
              <FaTelegramPlane size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors">
              <FaVk size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors">
              <FaYoutube size={24} />
            </a>
          </div> */}

          <p className="text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} РитмКапсула. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
import './globals.css' // Убедитесь, что путь к globals.css правильный
import Header from '@/components/Header' // Пример пути, замените на свой
import Footer from '@/components/Footer' // Пример пути, замените на свой

// Основные метаданные остаются здесь
export const metadata = {
  title: "Ритм Капсула - Твой ИИ-тренер для покорения ритма",
  description: "Освободи свой ритм с РитмКапсула! Персональные ИИ-упражнения, курируемые драм-румы и экономия на обучении.",
}

// Отдельный экспорт для viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Опционально, но часто полезно для предотвращения нежелательного масштабирования пользователем
  // themeColor: '#000000', // Опционально: цвет строки состояния браузера на мобильных
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
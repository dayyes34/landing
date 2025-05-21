/** @type {import('next').NextConfig} */

// Имя вашего репозитория на GitHub
const repoName = 'landing'; // Убедитесь, что это точное имя вашего репозитория

// Определяем, что это сборка для продакшена (деплоя)
// 'next build' автоматически устанавливает NODE_ENV в 'production'
const isProdBuild = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  // Применяем basePath и assetPrefix только для продакшн сборок
  // При 'npm run dev', basePath будет '', assetPrefix будет undefined
  basePath: isProdBuild ? `/${repoName}` : '', // Используем шаблонные строки для правильной вставки repoName
  assetPrefix: isProdBuild ? `/${repoName}/` : undefined, // Используем шаблонные строки и добавляем слеш в конце

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
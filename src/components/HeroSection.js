import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden 
                 text-center lg:text-left" 
                 // Убрали md:justify-start, возвращаем justify-center для всех разрешений
    >
      {/* Фоновые "авроры" */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-25%] w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-brand-cyan/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] animate-pulse-slow-cyan opacity-70"></div>
        <div className="absolute bottom-[-20%] right-[-25%] w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-brand-pink/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] animate-pulse-slow-pink opacity-70"></div>
      </div>

      {/* 
        Вертикальные отступы. 
        Возвращаем более щедрые отступы, особенно для md и lg,
        чтобы при justify-center контент занимал больше высоты.
      */}
      <div className="relative z-10 container-custom mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 w-full flex flex-col items-center
                 pt-6 pb-10          {/* База */}
                 xs:pt-8 xs:pb-12    {/* Маленькие смартфоны */}
                 md:pt-16 md:pb-16   {/* Планшеты в портрете (iPad mini, iPad) - УВЕЛИЧЕНЫ */}
                 lg:pt-20 lg:pb-20   {/* Большие планшеты (iPad Pro портрет), начало десктопа - УВЕЛИЧЕНЫ */}
                 xl:pt-24 xl:pb-24   {/* Десктопы и очень большие экраны - УВЕЛИЧЕНЫ */}
                 ">

        {/* Блок логотипа: */}
        <div className="w-full text-center lg:text-left 
                        mb-4 xs:mb-6 
                        md:mb-8            // Отступ под лого на средних экранах - УВЕЛИЧЕН
                        lg:mb-10           // Отступ под лого на больших экранах - УВЕЛИЧЕН
                        xl:mb-12">
          <div className="inline-block lg:block">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-brand-cyan">
              Ритм<span className="text-brand-pink">Капсула</span>
            </div>
          </div>
        </div>

        {/* Основной контент (текст + смартфон) */}
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-8 xl:gap-x-12">

          {/* Текстовый блок (Левая колонка на LG+) */}
          <div className="order-1 lg:order-none lg:w-1/2 mb-6 xs:mb-8 md:mb-10 lg:mb-0"> {/* Отступы УВЕЛИЧЕНЫ */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-tight text-gray-100"> {/* Отступы УВЕЛИЧЕНЫ */}
              <span className="block">
                Умный <span className="text-brand-cyan">AI-Тренажер</span>
              </span>
              <span className="block">
                для барабанщика
              </span>
              <span className="block text-gray-200 font-normal text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 xs:mt-3 md:mt-4"> {/* Отступы УВЕЛИЧЕНЫ */}
                Прямо в твоем смартфоне
              </span>
            </h1>

            {/* Преимущества для десктопа (появляются на LG+) */}
            <div className="hidden lg:block">
              <p className="text-lg xl:text-xl text-gray-400 mb-8 md:mb-10 max-w-xl"> {/* Отступы УВЕЛИЧЕНЫ */}
                <span className="font-semibold text-gray-100">Создан, чтобы твоя самостоятельная практика превосходила все ожидания.</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm max-w-xl mb-10 md:mb-12"> {/* Отступы УВЕЛИЧЕНЫ */}
                {[
                  { icon: "🤖", text: "ИИ-тренер в кармане" },
                  { icon: "🥁", text: "Проверенные драм-румы" },
                  { icon: "💸", text: "Экономия и независимость" },
                  { icon: "📈", text: "Твой рост – твои правила" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-md p-4 rounded-xl shadow-lg text-gray-200 flex items-center border border-gray-700/60 hover:border-brand-cyan/70 transition-colors duration-300 hover:shadow-brand-cyan/10 hover:shadow-2xl"
                  >
                    <span className="mr-3 text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 md:mt-12"> {/* Отступы УВЕЛИЧЕНЫ */}
                <button className="btn-primary text-lg px-8 py-4">
                  Начать революцию в обучении
                </button>
              </div>
            </div>
          </div>

          {/* Блок "Смартфона" (Правая колонка на LG+) */}
          <div className="order-2 lg:order-none lg:w-1/2 flex justify-center lg:justify-end items-center 
                          mb-6 xs:mb-8 md:mb-10 lg:mb-0"> {/* Отступы УВЕЛИЧЕНЫ */}
            <div
              className="bg-black p-1 xs:p-1.5 rounded-[24px] xs:rounded-[28px] shadow-xl shadow-brand-pink/10 hover:shadow-brand-cyan/20 transition-all duration-300 
                         w-[200px] h-[420px]         
                         xs:w-[220px] xs:h-[460px]   
                         sm:w-[280px] sm:h-[580px]   
                         md:w-[300px] md:h-[620px]   
                         lg:w-[280px] lg:h-[580px]   
                         xl:w-[300px] xl:h-[620px]   
                         lg:-mt-4 xl:-mt-8           
                         "
            >
              <div className="bg-gray-950 w-full h-full rounded-[18px] xs:rounded-[20px] overflow-hidden relative border border-gray-700/30">
                <div className="absolute top-2.5 xs:top-3 left-1/2 transform -translate-x-1/2 w-[70px] h-4 xs:w-[80px] xs:h-5 bg-black rounded-full z-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-10">
                  <svg className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Текст "Создан, чтобы..." и кнопка CTA ДЛЯ МОБИЛЬНЫХ и ПЛАНШЕТОВ (до LG) */}
        <div className="order-3 lg:hidden w-full mt-6 xs:mt-8 md:mt-10 
                        max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto 
                        flex flex-col items-center
                        "> {/* Отступы УВЕЛИЧЕНЫ */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-6 xs:mb-8 md:mb-10"> {/* Отступы УВЕЛИЧЕНЫ */}
            <span className="font-semibold text-gray-100">Создан, чтобы твоя самостоятельная практика превосходила все ожидания.</span>
          </p>
          <button className="btn-primary text-base xs:text-lg md:text-xl px-6 py-3 xs:px-8 xs:py-4 md:px-10 md:py-5 
                             w-full 
                             sm:w-auto 
                             "> 
            Начать революцию в обучении
          </button>
        </div>
      </div>
    </section>
  );
}
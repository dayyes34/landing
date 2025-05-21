import React from 'react';
import Image from 'next/image';
const steps = [
  {
    id: 1,
    title: "Создай ритм или вдохновись ИИ",
    description:
      "Начни с «Базы Барабанщика», запрограммируй свой уникальный бит в секвенсоре или позволь нашему ИИ сгенерировать паттерн по душе. Сразу видишь нотацию и координацию для эффективного старта.",
    icon: "🎼", 
    visual: "https://images.unsplash.com/photo-1581300188108-038172931ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBjcmVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", // Замените на реальное изображение
    colorClass: "brand-cyan", // Для акцента номера/иконки/границы
  },
  {
    id: 2,
    title: "Визуализируй, контролируй, оттачивай",
    description:
      "Наглядно изучай координацию конечностей. Воспроизводи упражнение в любом темпе, зацикливай сложные участки, чтобы отработать их идеально.",
    icon: "👁️‍🗨️", 
    visual: "https://images.unsplash.com/photo-1516970078100-9acf85524610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpc3VhbGl6YXRpb24lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", // Замените на реальное изображение
    colorClass: "brand-pink", // Для акцента
  },
  {
    id: 3,
    title: "Практикуй свободно, расти в своем темпе",
    description:
      "Используй наши драм-румы для полной концентрации без жестких временных рамок. Отслеживай прогресс и наслаждайся ростом своего мастерства.",
    icon: "🚀", 
    visual: "https://images.unsplash.com/photo-1558562477-799565589109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJ1bSUyMHByYWN0aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", // Замените на реальное изображение
    colorClass: "brand-teal", // Для акцента
  },
];

export default function HowItWorksSection() {
  return (
    <section 
      id="how-it-works" 
      className="bg-black relative overflow-hidden text-gray-100" // Изменен фон
    >
      {/* Фоновые "авроры" */}
      <div className="absolute inset-0 z-0 opacity-80"> {/* Можно настроить интенсивность */}
        <div className="absolute top-[20%] left-[-15%] w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] bg-brand-pink/10 rounded-full blur-[100px] sm:blur-[130px] md:blur-[160px] animate-pulse-slow-pink"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-brand-cyan/15 rounded-full blur-[90px] sm:blur-[110px] md:blur-[150px] animate-pulse-slow-cyan"></div>
        <div className="absolute top-[40%] right-[10%] w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-brand-teal/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px] animate-pulse-slow-teal" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div 
        className="relative z-10 container-custom mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 w-full
                   pt-12 pb-12          
                   xs:pt-16 xs:pb-16    
                   md:pt-20 md:pb-20    
                   lg:pt-24 lg:pb-24    
                   xl:pt-28 xl:pb-28    
                  "
      >
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Как <span className="text-brand-cyan">РитмКапсула</span> выводит твою игру на новый уровень
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/60 
                          overflow-hidden flex flex-col items-center text-center group
                          transition-all duration-300 hover:shadow-${step.colorClass}/30 hover:border-${step.colorClass}/70 hover:shadow-2xl h-full`}
            >
               {/* Изображение сверху */}
               {step.visual && (
                <div className="relative w-full h-48 sm:h-56 md:h-56 overflow-hidden group"> {/* Добавлен 'group' для group-hover на Image, если нужно */}
                  <Image
                    src={step.visual} // Путь к изображению (из /public или внешний URL)
                    alt={`Шаг ${step.id}: ${step.title}`}
                    fill // Заполняет родительский элемент. Родитель должен иметь position: relative.
                    style={{ objectFit: 'cover' }} // Для Next.js 13+ используйте style={{objectFit: 'cover'}}.
                                                    // Для старых версий можно было использовать className="object-cover"
                    className="transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
              )}


              <div className="p-6 flex flex-col items-center flex-grow">
                {/* Номер и Иконка */}
                <div className="flex items-center mb-4">
                  <span 
                    className={`text-4xl md:text-5xl font-extrabold text-${step.colorClass} mr-3`}
                  >
                    {String(step.id).padStart(2, '0')}
                  </span>
                  <span className={`text-3xl md:text-4xl text-${step.colorClass} opacity-90`}>
                    {step.icon}
                  </span>
                </div>

                <h3 className={`text-xl lg:text-2xl font-semibold mb-3 text-gray-50`}>
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
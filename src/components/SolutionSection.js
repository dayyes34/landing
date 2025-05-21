import React from 'react';

const pillars = [
  {
    id: "base",
    icon: "📚", // Иконка (можно сделать более минималистичной или SVG)
    title: "База Барабанщика",
    description:
      "Уникальная коллекция упражнений для оттачивания техники и грувов. Фундамент твоего мастерства с измеримым прогрессом.",
    colorClass: "brand-cyan", 
  },
  {
    id: "ai",
    icon: "✨", // Иконка
    title: "РитмКапсула ИИ",
    description:
      "Неиссякаемый источник вдохновения. ИИ-генератор уникальных битов и идей, адаптированных под твой стиль.",
    colorClass: "brand-pink",
  },
  {
    id: "rooms",
    icon: "🎧", // Иконка
    title: "Сеть Драм-Румов",
    description:
      "Доступ к проверенным драм-румам. Занимайся на качественном оборудовании в комфортной обстановке.",
    colorClass: "brand-teal", 
  },
];

export default function FeaturesSection() {
  return (
    <section 
      id="features" 
      className="bg-black relative overflow-hidden text-gray-100"
    >
      {/* Фоновые "авроры" - можно сделать их менее активными */}
      <div className="absolute inset-0 z-0 opacity-70"> {/* Уменьшил общую опасити аврор */}
        <div className="absolute top-[10%] left-[-25%] w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[160px] animate-pulse-slow-cyan"></div>
        <div className="absolute bottom-[5%] right-[-20%] w-60 h-60 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] bg-brand-pink/5 rounded-full blur-[90px] sm:blur-[110px] md:blur-[150px] animate-pulse-slow-pink"></div>
        <div className="absolute top-[35%] right-[5%] w-52 h-52 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] bg-brand-teal/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px] animate-pulse-slow-teal"></div>
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
            Внутри <span className="text-brand-cyan">Ритм</span><span className="text-brand-pink">Капсулы</span>:
          </h2>
          <p className="mt-3 xs:mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Три ключевых компонента твоей персональной экосистемы для покорения ритма:
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="flex items-start group" // group для потенциальных hover эффектов на дочерних элементах
            >
              {/* Номер */}
              <div className={`mr-4 md:mr-6 flex-shrink-0`}>
                <span className={`text-5xl md:text-6xl font-bold text-${pillar.colorClass} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  0{index + 1}
                </span>
              </div>

              {/* Иконка и Текст */}
              <div className="pt-1"> {/* Небольшой отступ сверху для выравнивания с центром цифры */}
                <div className="flex items-center mb-2">
                  <span className={`text-3xl md:text-4xl mr-3 text-${pillar.colorClass} opacity-90 group-hover:opacity-100 transition-opacity`}>
                    {pillar.icon}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-semibold text-gray-50 group-hover:text-white transition-colors`}>
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
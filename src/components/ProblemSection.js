import React from 'react';

const pains = [
  {
    icon: "😥", // Иконка для "боли"
    title: "Занятия в школе? Час пролетел – прогресс на месте.",
    description: "Платишь за час, а что в итоге? Немного разговоров \"за жизнь\", пара рудиментов, только вошел во вкус – и всё, время вышло. Настоящего прорыва так и не видно, а вдохновение улетучивается."
  },
  {
    icon: "🤯", // Иконка для "боли"
    title: "Решил заниматься сам? Респект! Но информации – океан...",
    description: <>Информации – океан, непонятно, за что хвататься и, главное, <span className="text-brand-cyan font-medium">где черпать свежие креативные идеи?</span> Стандартные учебники и бесконечные видео усыпляют, а пока разберешься в дебрях материала – мотивация уже на нуле.</>
  },
  // Можно добавить еще одну "боль", если есть, для сетки из 3-х или для баланса
  // {
  //   icon: "😒",
  //   title: "Одиночество и отсутствие поддержки",
  //   description: "Самостоятельные занятия могут быть демотивирующими без обратной связи и поддержки единомышленников.",
  // }
];

export default function PainSolutionSection() {
  return (
    <section 
      id="pain-solution" 
      className="bg-black relative overflow-hidden text-gray-100"
    >
      {/* Фоновые "авроры" */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[5%] right-[-30%] w-80 h-80 sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-brand-pink/15 rounded-full blur-[100px] sm:blur-[120px] md:blur-[170px] animate-pulse-slow-pink opacity-50"></div>
        <div className="absolute bottom-[10%] left-[-25%] w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-brand-cyan/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] animate-pulse-slow-cyan opacity-60"></div>
        <div className="absolute top-[30%] right-[10%] w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-brand-teal/10 rounded-full blur-[90px] sm:blur-[110px] md:blur-[150px] animate-pulse-slow-teal opacity-40"></div>
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
        {/* ЗАГОЛОВОК БОЛЕЙ */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Знакомые <span className="text-brand-pink">ощущения</span>?
          </h2>
          <p className="mt-3 xs:mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Мы понимаем, через что проходят барабанщики на пути к мастерству.
            Возможно, и ты сталкивался с этим:
          </p>
        </div>

        {/* КАРТОЧКИ С БОЛЯМИ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20 lg:mb-24">
          {pains.map((pain, index) => (
            <div 
              key={index} 
              className="bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-700/60 
                         hover:border-brand-pink/70 transition-all duration-300 hover:shadow-brand-pink/20 hover:shadow-2xl
                         flex flex-col text-left"
            >
              <div className={`text-3xl sm:text-4xl mb-4 text-red-400`}> {/* Используем красный для "болей" */}
                {pain.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-50 mb-3">{pain.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>

        {/* МОСТ К РЕШЕНИЮ (Опционально, можно убрать если кажется лишним) */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-4 leading-relaxed font-light">
            Хватит мириться с преградами. <br className="sm:hidden"/> Есть <span className="font-semibold text-brand-teal">эффективный путь</span> к твоим барабанным целям.
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl text-brand-cyan font-semibold leading-tight">
            Представляем решение, которое изменит всё:
          </p>
        </div>

        {/* РЕШЕНИЕ */}
        <div className="max-w-4xl mx-auto p-6 py-8 sm:p-8 sm:py-10 md:p-10 md:py-12 lg:p-12 lg:py-16
                        bg-gradient-to-br from-brand-cyan/80 via-brand-teal/70 to-brand-cyan/80 
                        backdrop-blur-md rounded-2xl shadow-2xl shadow-brand-cyan/40
                        border border-brand-teal/50 text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
            Встречай <span className="font-extrabold">Ритм<span className="text-brand-pink">Капсулу!</span></span>
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-50 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
            Твоя личная <strong className="font-semibold text-white">экосистема для взрывного роста</strong> на барабанах. <br className="hidden sm:block"/>Создана для независимых музыкантов, ценящих время, деньги и свободу.
          </p>
          <div className="text-left text-gray-100 space-y-4 md:space-y-5 text-md sm:text-lg md:text-xl max-w-2xl mx-auto">
            {[
              { icon: "🎯", text: "Структурированные знания и упражнения, ведущие к реальному результату." },
              { icon: "💡", text: "Генератор креатива: уникальные инструменты для вдохновения и развития стиля." },
              { icon: "🥁", text: <>Доступ к сети <strong className="font-semibold text-white">партнёрских драм-румов</strong> для практики на качественном оборудовании.</> },
              { icon: "📈", text: "AI-тренер для отслеживания прогресса и персонализированных рекомендаций."}
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <span className={`font-semibold text-2xl mr-3 ${index % 2 === 0 ? 'text-brand-cyan' : 'text-brand-pink'}`}>{point.icon}</span>
                <span>{point.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 md:mt-12 text-xl sm:text-2xl md:text-3xl text-white font-semibold">
            Ритм<span className="text-brand-cyan">Капсула</span> – играй в кайф, развивайся без границ!
          </p>
          <div className="mt-10 md:mt-12">
            <button className="btn-primary text-lg px-8 py-4 md:text-xl md:px-10 md:py-5">
              Узнать больше и начать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
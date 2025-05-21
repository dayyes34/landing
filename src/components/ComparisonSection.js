// src/components/ComparisonSection.js
export default function ComparisonSection() {
  const comparisonData = [
    { criterion: "Обучение", traditional: "Общая программа, диктат преподавателя", rhythmCapsule: "Персональный ИИ-тренер, твои правила" },
    { criterion: "Стоимость", traditional: "Высокая почасовая, скрытые платежи", rhythmCapsule: "Прозрачная подписка, огромная экономия" },
    { criterion: "Место и время", traditional: "Привязка к студии и расписанию", rhythmCapsule: "Занимайся где и когда хочешь (дома/рум)" },
    { criterion: "Доступ к практике", traditional: "Только оплаченное время в студии школы", rhythmCapsule: "ИИ-тренер дома + доступ к драм-румам" },
    { criterion: "Разнообразие", traditional: "Ограничено знаниями 1 человека", rhythmCapsule: "Бесконечные ИИ-генерируемые упражнения" },
    { criterion: "Прогресс", traditional: "Часто медленный, зависит от «химии»", rhythmCapsule: "Быстрый, измеримый, в твоем темпе" },
    { criterion: "Итог", traditional: "Дорого, неудобно, не всегда эффективно", rhythmCapsule: "Выгодно, гибко, современно, мощно" },
  ];

  return (
    <section 
      id="comparison" 
      className="bg-black relative overflow-hidden text-gray-100" // Обновлен фон
    >
      {/* Фоновые "авроры" */}
      <div className="absolute inset-0 z-0 opacity-70"> 
        <div className="absolute top-[5%] left-[-20%] w-80 h-80 sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] sm:blur-[130px] md:blur-[170px] animate-pulse-slow-cyan"></div>
        <div className="absolute bottom-[10%] right-[-15%] w-72 h-72 sm:w-96 sm:h-96 md:w-[550px] md:h-[550px] bg-brand-pink/5 rounded-full blur-[90px] sm:blur-[110px] md:blur-[150px] animate-pulse-slow-pink" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div 
        className="relative z-10 container-custom mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 w-full
                   pt-12 pb-12          
                   xs:pt-16 xs:pb-16    
                   md:pt-20 md:pb-20    
                   lg:pt-24 lg:pb-24    
                   xl:pt-28 xl:pb-28"
      >
        <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-center mb-12 md:mb-16 lg:mb-20">
          <span className="text-brand-cyan">РитмКапсула</span> vs. Традиционный подход: <br className="sm:hidden"/> Сделай правильный выбор
        </h2>

        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/60 rounded-2xl shadow-xl overflow-hidden p-0 sm:p-1 md:p-2">
          {/* Добавил обертку для эффекта карточки и контроля отступов */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] md:min-w-[800px] lg:min-w-full text-sm sm:text-base"> 
              {/* min-w-full для lg чтобы таблица занимала всю ширину карточки */}
              <thead className="border-b-2 border-gray-700/80">
                <tr>
                  <th className="py-4 sm:py-5 px-3 sm:px-4 md:px-6 text-left font-semibold text-gray-100 w-[25%] md:w-[20%]">Критерий</th>
                  <th className="py-4 sm:py-5 px-3 sm:px-4 md:px-6 text-left font-semibold text-gray-400 w-[40%] md:w-[40%]">Традиционная школа</th>
                  <th className="py-4 sm:py-5 px-3 sm:px-4 md:px-6 text-left font-semibold text-brand-cyan w-[35%] md:w-[40%]">Экосистема <span className="text-brand-pink">РитмКапсула</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-700/60 transition-colors duration-200 
                                ${index === comparisonData.length - 1 ? 'border-b-0' : ''} 
                                hover:bg-gray-700/30`}
                  >
                    <td className="py-4 sm:py-5 px-3 sm:px-4 md:px-6 font-medium text-gray-100 align-top">{item.criterion}</td>
                    <td className="py-4 sm:py-5 px-3 sm:px-4 md:px-6 text-gray-400 align-top">{item.traditional}</td>
                    <td className="py-4 sm:py-5 px-3 sm:px-4 md:px-6 text-brand-teal font-semibold align-top"> {/* Изменил цвет на brand-teal для разнообразия и читаемости */}
                      {item.rhythmCapsule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
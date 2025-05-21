// src/components/FaqSection.js
export default function FaqSection() {
  const faqs = [
    {
      question: "Как работает доступ к драм-румам? Это отдельная плата?",
      answer: "Доступ к базе курируемых драм-румов является частью подписки 'Капсула ИИ Про'. Мы предоставляем информацию и, в некоторых случаях, эксклюзивные скидки от наших партнеров. Сама аренда рума оплачивается отдельно непосредственно площадке, но вы получаете проверенные варианты и выгодные условия."
    },
    {
      question: "Заменит ли РитмКапсула живого преподавателя полностью?",
      answer: "РитмКапсула предоставляет МОЩНЫЕ инструменты для самостоятельного роста и экономии. Для некоторых целей живой наставник может быть полезен, но РитмКапсула кардинально снижает потребность в нем и делает вас гораздо более подготовленным и осознанным учеником, способным получать максимум от любых занятий."
    },
    {
      question: "Как ИИ РитмКапсулы создает персонализированные упражнения?",
      answer: "Наш ИИ анализирует ваши цели, текущий уровень, выбранный инструмент и даже ваши предыдущие результаты (в 'Про' версии). На основе этих данных он генерирует 'упражнения-капсулы', сфокусированные на конкретных аспектах ритма, техники или музыкальных стилей, которые актуальны именно для вас."
    },
    {
      question: "Для каких инструментов подходит РитмКапсула?",
      answer: "В первую очередь РитмКапсула оптимизирована для барабанщиков и перкуссионистов. Однако, многие упражнения на развитие чувства ритма, тайминга и полиритмии будут полезны музыкантам, играющим на любых инструментах (гитара, бас, клавишные и т.д.)."
    },
    {
      question: "Что если мне не подойдет 'Про' подписка?",
      answer: "Мы стремимся к тому, чтобы РитмКапсула приносила реальную пользу. Если в течение первых 7 дней после покупки 'Про' подписки вы поймете, что она вам не подходит, мы вернем деньги без лишних вопросов. Также вы всегда можете начать с бесплатного плана 'Капсула Старт'."
    }
  ];

  return (
    <section 
      id="faq" 
      className="bg-black text-gray-100 relative overflow-hidden
                 py-12 xs:py-16 md:py-20 lg:py-24 xl:py-28" // Адаптивные вертикальные отступы
    >
      <div 
        className="relative z-10 container-custom mx-auto w-full
                   px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 max-w-3xl" // Ограничение ширины для FAQ
      >
        <h2 
          className="text-center mb-10 md:mb-12 lg:mb-16 
                     text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl 
                     font-bold leading-tight text-white"
        >
          Часто Задаваемые <span className="text-brand-cyan">Вопросы</span>
        </h2>
        <div className="space-y-4 md:space-y-6"> {/* Отступы между элементами FAQ */}
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="bg-gray-900/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg group 
                         border border-gray-700/50 hover:border-brand-cyan/70 transition-colors duration-300"
              // name="faq-accordion" // Можно добавить для управления "только один открыт" с помощью JS, если нужно
            >
              <summary 
                className="font-semibold text-base sm:text-lg text-gray-100 cursor-pointer list-none 
                           flex justify-between items-center 
                           group-open:text-brand-cyan transition-colors duration-200 py-1"
              >
                <span>{faq.question}</span>
                {/* Обновленная иконка-шеврон для лучшей семантики и анимации */}
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-brand-pink transform group-open:rotate-180 transition-transform duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed pr-2 sm:pr-0"> {/* Добавлен pr для компенсации полосы прокрутки, если текст длинный */}
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
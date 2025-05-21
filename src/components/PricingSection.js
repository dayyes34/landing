// src/components/PricingSection.js
export default function PricingSection() {
  const plans = [
    {
      name: "Капсула Старт",
      price: "Бесплатно",
      features: [
        "Ограниченные ИИ Упражнения-капсулы",
        "Базовое отслеживание прогресса",
        "Доступ к Демо Секвенсору",
        "Поддержка сообщества"
      ],
      cta: "Начать бесплатно",
      popular: false,
      href: "#" // Замените на ссылку регистрации или демо
    },
    {
      name: "Капсула ИИ Про",
      price: "990₽", // Пример цены
      period: "/ месяц",
      features: [
        "Полный доступ ко всем ИИ Упражнениям-капсулам",
        "Безлимитные персональные планы тренировок",
        "Расширенная аналитика прогресса",
        "Эксклюзивные предложения от драм-румов (если есть)",
        "Приоритетная поддержка",
        "Доступ ко всем новым функциям"
      ],
      cta: "Стать независимым музыкантом",
      popular: true,
      href: "#" // Замените на ссылку покупки
    }
  ];

  return (
    <section 
      id="pricing" 
      className="bg-black text-gray-100 relative overflow-hidden
                 py-12 xs:py-16 md:py-20 lg:py-24 xl:py-28" // Адаптивные вертикальные отступы
    >
      <div 
        className="relative z-10 container-custom mx-auto w-full
                   px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16" // Адаптивные боковые отступы
      >
        <div className="text-center mb-10 md:mb-12 lg:mb-16"> {/* Отступы под заголовком */}
          <h2 
            className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl 
                       font-bold leading-tight text-white mb-3 sm:mb-4"
          >
            Выбери свою степень свободы с <span className="text-brand-cyan">РитмКапсулой</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Экономия до <span className="font-bold text-brand-pink">10 раз</span> по сравнению с традиционными уроками!
          </p>
        </div>

        {/* 
          Для двух планов можно использовать md:grid-cols-2 и центрировать их.
          Если планов будет 3, то lg:grid-cols-3 будет уместно.
          max-w-5xl для двух крупных карточек выглядит хорошо.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"> 
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 sm:p-8 flex flex-col transition-all duration-300
                          ${plan.popular 
                              ? 'bg-gray-800/70 backdrop-blur-md border-2 border-brand-cyan shadow-2xl md:scale-105' 
                              : 'bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600'
                          }`}
            >
              {plan.popular && (
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-cyan mb-3 sm:mb-4 self-center bg-cyan-900/60 px-3 py-1 rounded-full">
                  Самый популярный
                </div>
              )}
              <h3 
                className={`text-2xl sm:text-3xl font-bold mb-2 text-center
                            ${plan.popular ? 'text-brand-cyan' : 'text-white'}`}
              >
                {plan.name}
              </h3>
              <div className="mb-4 sm:mb-6 text-center">
                <span className={`text-4xl sm:text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-100'}`}>{plan.price}</span>
                {plan.period && <span className="text-sm text-gray-400 ml-1">{plan.period}</span>}
              </div>
              <ul className="space-y-3 text-gray-300 mb-8 text-left text-sm sm:text-base flex-grow"> {/* flex-grow для растягивания списка */}
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg 
                      className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 
                                  ${plan.popular ? 'text-brand-cyan' : 'text-brand-pink/80'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={plan.href} 
                className={`w-full block text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105
                                 ${plan.popular 
                                     ? 'bg-brand-cyan hover:bg-cyan-400 text-gray-900 shadow-lg hover:shadow-brand-cyan/50' 
                                     : 'bg-brand-pink hover:bg-pink-500 text-white shadow-md hover:shadow-brand-pink/40'
                                 }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
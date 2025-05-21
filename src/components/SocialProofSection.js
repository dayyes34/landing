// src/components/SocialProofSection.js
export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "С РитмКапсулой я наконец-то занимаюсь в своем темпе, а не подстраиваюсь под учителя. А драм-румы поблизости – это просто находка! ИИ-тренер реально помогает увидеть слабые места.",
      name: "Алексей П.",
      role: "Начинающий барабанщик"
    },
    {
      quote: "ИИ-капсулы упражнений – это нечто! Каждый день что-то новое и точно под мои цели. Экономия на уроках колоссальная, а прогресс налицо.",
      name: "Мария С.",
      role: "Гитаристка, самоучка"
    },
    {
      quote: "Устал от стандартных методик. РитмКапсула дала мне свободу и инструменты для самостоятельного роста. Рекомендую всем, кто ценит свое время и деньги.",
      name: "Иван К.",
      role: "Опытный музыкант"
    }
  ];

  return (
    <section 
      id="social-proof" 
      className="bg-black text-gray-100 relative overflow-hidden
                 py-12 xs:py-16 md:py-20 lg:py-24 xl:py-28" // Адаптивные вертикальные отступы
    >
      <div 
        className="relative z-10 container-custom mx-auto w-full
                   px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16" // Адаптивные боковые отступы
      >
        <h2 
          className="text-center mb-10 md:mb-12 lg:mb-16 
                     text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl 
                     font-bold leading-tight text-white"
        >
          Реальные результаты: <span className="text-brand-cyan">Что говорят музыканты</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Адаптивная сетка */}
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl flex flex-col 
                         border border-gray-700/50 hover:border-brand-pink/50 transition-all duration-300
                         transform hover:-translate-y-1" // Добавлен эффект приподнятия и изменения границы
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan mb-4 opacity-80" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.333 8C6.96 8 5 10.032 5 12.486v7.028c0 2.454 1.96 4.486 4.333 4.486h1.334V32h5.333V24h2.667L21 14.667V8h-4v2.667h-2.667V8H9.333zm13.334 0c-2.373 0-4.333 2.032-4.333 4.486v7.028c0 2.454 1.96 4.486 4.333 4.486H24V32h5.333V24h2.667L32 14.667V8h-4v2.667h-2.667V8h-2.666z"/>
              </svg>
              <p className="text-gray-200 italic mb-6 text-base sm:text-lg leading-relaxed flex-grow">
                {/* Кавычки можно оставить текстовыми или убрать, так как есть иконка */}
                {testimonial.quote} 
              </p>
              <div className="mt-auto pt-4 border-t border-gray-700/80">
                <p className="font-semibold text-brand-pink text-lg sm:text-xl">{testimonial.name}</p>
                <p className="text-sm sm:text-base text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
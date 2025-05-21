// src/components/AboutUsSection.js
export default function AboutUsSection() {
  return (
    <section 
      id="about" 
      className="bg-black text-gray-100 relative overflow-hidden
                 py-12 xs:py-16 md:py-20 lg:py-24 xl:py-28" // Адаптивные вертикальные отступы
    >
      <div 
        className="relative z-10 container-custom mx-auto w-full
                   px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 max-w-3xl" // Ограничение ширины и адаптивные боковые отступы
      >
        <div className="text-center">
          <h2 
            className="mb-8 md:mb-10 lg:mb-12 
                       text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl 
                       font-bold leading-tight text-white"
          >
            Мы здесь, чтобы <span className="text-brand-cyan">изменить правила</span>
          </h2>
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed md:leading-loose">
            <p>
              В <span className="font-semibold text-brand-cyan">РитмКапсуле</span> мы – музыканты и разработчики, горящие идеей сделать качественное музыкальное образование доступным и эффективным. Мы сами прошли через иглу дорогих уроков и архаичных методик.
            </p>
            <p>
              Наша миссия – дать каждому музыканту <span className="font-semibold text-brand-pink">свободу</span> выбора, <span className="font-semibold text-brand-pink">инструменты</span> для самостоятельного роста и <span className="font-semibold text-brand-pink">уверенность</span> в своем ритме. Мы верим, что технологии ИИ могут революционизировать обучение, сделав его персонализированным, увлекательным и результативным.
            </p>
            <p className="mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Присоединяйтесь к нам в создании будущего, где каждый может освободить свой внутренний ритм!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
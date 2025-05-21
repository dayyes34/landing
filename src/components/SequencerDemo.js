// src/components/SequencerDemo.js
export default function SequencerDemo() {
    return (
      <section 
        id="demo" 
        className="bg-black relative overflow-hidden text-gray-100" // Изменен фон, добавлен relative и overflow
      >
        {/* Фоновые "авроры" */}
        <div className="absolute inset-0 z-0 opacity-70"> {/* Можно настроить интенсивность */}
          {/* Пример аврор, можно скопировать из других секций или создать уникальные */}
          <div className="absolute top-[10%] left-[5%] w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-brand-teal/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[160px] animate-pulse-slow-teal"></div>
          <div className="absolute bottom-[15%] right-[10%] w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] bg-brand-pink/10 rounded-full blur-[100px] sm:blur-[130px] md:blur-[170px] animate-pulse-slow-pink" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-[30%] right-[35%] w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-brand-cyan/15 rounded-full blur-[90px] sm:blur-[110px] md:blur-[150px] animate-pulse-slow-cyan" style={{animationDelay: '0.3s'}}></div>
        </div>

        <div 
          className="relative z-10 container-custom mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 w-full text-center
                     pt-12 pb-12          
                     xs:pt-16 xs:pb-16    
                     md:pt-20 md:pb-20    
                     lg:pt-24 lg:pb-24    
                     xl:pt-28 xl:pb-28"
        >
          <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6 md:mb-8">
            Попробуй наш <span className="text-brand-cyan">Интерактивный</span> <span className="text-brand-pink">ИИ-Секвенсор</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12 max-w-3xl mx-auto">
            Получи представление о том, как РитмКапсула ИИ поможет тебе создавать и понимать сложные ритмы. Экспериментируй с ключевой функцией приложения прямо здесь, в твоем браузере.
          </p>

          {/* Блок для интерактивного демо */}
          <div 
            className="bg-gray-800/60 backdrop-blur-md border border-gray-700/60 
                       rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 
                       min-h-[400px] sm:min-h-[450px] md:min-h-[500px] 
                       flex items-center justify-center"
          >
            {/* СЮДА НУЖНО ВСТАВИТЬ ВАШ REACT-КОМПОНЕНТ СЕКВЕНСОРА */}
            <div className="text-center">
              <svg className="mx-auto h-16 w-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6V4m0 2a2 2 0 100 4 2 2 0 000-4zm12-3a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <p className="text-xl md:text-2xl text-gray-400 font-semibold">
                Интерактивное демо секвенсора скоро здесь!
              </p>
              <p className="text-sm text-gray-500 mt-2">Пока что здесь можно представить скриншот или гифку работы</p>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <a href="#pricing" className="btn-primary text-lg px-10 py-4 md:text-xl md:px-12 md:py-5">
              Разблокировать полную мощь ИИ
            </a>
          </div>
        </div>
      </section>
    );
  }
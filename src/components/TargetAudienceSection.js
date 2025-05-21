// src/components/TargetAudienceSection.js
export default function TargetAudienceSection() {
  const audience = [
    { text: "Для начинающих, кто хочет «разжеванный» старт без переплат.", iconPlaceholder: "🎯" }, // Используем iconPlaceholder для ясности
    { text: "Для продолжающих, кто ищет новые идеи и хочет пробить «плато».", iconPlaceholder: "🚀" },
    { text: "Для самоучек, ценящих независимость и современные инструменты.", iconPlaceholder: "💡" },
    { text: "Для тех, кто устал от «воды» на уроках и хочет максимум практики.", iconPlaceholder: "🔥" },
    { text: "Для всех, кто хочет играть ритмично и уверенно, не разоряясь на обучении.", iconPlaceholder: "🥁" },
  ];

  return (
    <section 
      id="target-audience" 
      // Строго черный фон, как в вашем примере FeaturesSection
      className="bg-black text-gray-100 relative overflow-hidden 
                 py-12 xs:py-16 md:py-20 lg:py-24 xl:py-28" // Адаптивные вертикальные отступы
    >
      {/* Можно добавить схожие "авроры", если нужно, но пока оставляем без них, 
          чтобы не усложнять, как вы просили ранее */}

      <div 
        className="relative z-10 container-custom mx-auto w-full
                   px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16" // Адаптивные боковые отступы
      >
        <div className="text-center mb-10 md:mb-12 lg:mb-16"> {/* Отступы под заголовком */}
          <h2 
            className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl 
                       font-bold leading-tight text-white" // Стили заголовка как в FeaturesSection
          >
            Для кого создана <span className="text-brand-cyan">РитмКапсула</span>?
          </h2>
          {/* Можно добавить подзаголовок/описание, если нужно, по аналогии с FeaturesSection */}
          {/* 
          <p className="mt-3 xs:mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Краткое описание для кого этот продукт.
          </p> 
          */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Адаптивная сетка */}
          {audience.map((item, index) => (
            <div 
              key={index} 
              // Карточки с чуть более темным фоном, чем основной черный, для выделения,
              // но можно сделать и bg-black с границей, если нужно тотальное слияние.
              // Либо, как вариант, использовать полупрозрачный фон, если под ним будут "авроры".
              className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg text-left flex flex-col 
                         hover:bg-gray-800/80 transition-colors duration-300" // Простой hover эффект
            >
              {/* Место для иконки-плейсхолдера */}
              <div className="text-3xl sm:text-4xl mb-4 text-brand-pink"> 
                {item.iconPlaceholder} 
              </div>
              <p className="text-gray-200 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
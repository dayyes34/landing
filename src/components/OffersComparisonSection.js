// src/components/OffersComparisonSection.js
import React from 'react';
import OfferCard from './OfferCard';

const avatarSchool = "/images/avatars/school-avatar.png"; // Пример пути, замените на свой
const avatarRhythmCapsule = "/images/avatars/rhythm-avatar.png"; // Пример пути, замените на свой

const offersData = [
  {
    id: 'school',
    avatarSrc: avatarSchool,
    name: "Школа Барабанов",
    nameColor: "text-green-400", 
    bubbleColor: "bg-slate-700", 
    textColor: "text-gray-100",
    highlightText: "АКЦИЯ! 🔥🔥", 
    highlightColor: "text-yellow-400", 
    offerLines: [
      "Теперь не 11 000 ₽,",
      "а всего 10 000 ₽ за целых 5 часов занятий!",
      "Успейте воспользоваться предложением!"
    ],
    isAvatarRight: false,
  },
  {
    id: 'rhythmCapsule',
    avatarSrc: avatarRhythmCapsule,
    name: "Рит Мичный",
    nameColor: "text-blue-400", 
    bubbleColor: "bg-indigo-800", 
    textColor: "text-gray-50",
    highlightText: null,
    offerLines: [
      "Щедро! Целая тысяча скидки! 😊",
      "Предлагаю альтернативу:",
      "Месяц в Базе - 1000 ₽",
      <span key="studio" className="font-normal text-gray-200">+ 12 часов аренды <span className="text-pink-400 font-semibold">стильной студии</span> - 2800 ₽</span>,
    ],
    isAvatarRight: true,
  }
];

export default function OffersComparisonSection() {
  return (
    <section 
      id="offers-comparison" 
      className="bg-black relative overflow-hidden text-gray-100 font-ubuntu" // Добавил font-ubuntu глобально для секции
    >
      <div className="absolute inset-0 z-0 opacity-30"> {/* Уменьшил непрозрачность аврор */}
        <div className="absolute top-[10%] left-[-15%] w-96 h-96 md:w-[700px] md:h-[700px] bg-slate-700/25 rounded-full blur-[140px] md:blur-[220px] animate-pulse-slow"></div>
        <div className="absolute bottom-[5%] right-[-10%] w-80 h-80 md:w-[600px] md:h-[600px] bg-indigo-700/20 rounded-full blur-[120px] md:blur-[190px] animate-pulse-slow" style={{animationDelay: '0.7s'}}></div>
      </div>

      <div 
        className="relative z-10 container-custom mx-auto px-4 xs:px-6 sm:px-8 md:px-6 lg:px-8 xl:px-10 w-full
                   pt-12 pb-12          
                   xs:pt-16 xs:pb-16    
                   md:pt-20 md:pb-20    
                   lg:pt-24 lg:pb-24    
                   xl:pt-28 xl:pb-28"
      >
        <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black tracking-tight text-white text-center mb-16 md:mb-20 lg:mb-24 uppercase">
          Сравни и <span className="text-brand-pink">решай</span> <span className="text-brand-cyan">сам</span>
        </h2>

        {/* Обертка для карточек */}
        <div className="flex flex-col items-center md:items-stretch gap-12 md:gap-16 lg:gap-20"> 
          {/* 
            На md и выше, каждая карточка будет занимать свою "полосу", 
            а self-start/self-end в OfferCard их разместит по краям.
            Чтобы они были шире, можно увеличить gap или добавить padding к родительскому div.
            Или использовать flex-row с justify-between на очень больших экранах.
            Пока оставим так, чтобы каждая карточка сама решала, где ей быть.
          */}
          {offersData.map((offer) => (
            <div 
              key={offer.id} 
              className={`w-full flex ${offer.isAvatarRight ? 'justify-end' : 'justify-start'}`}
            >
              <OfferCard
                avatarSrc={offer.avatarSrc}
                name={offer.name}
                nameColor={offer.nameColor}
                bubbleColor={offer.bubbleColor}
                textColor={offer.textColor}
                offerLines={offer.offerLines}
                isAvatarRight={offer.isAvatarRight}
                highlightText={offer.highlightText}
                highlightColor={offer.highlightColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
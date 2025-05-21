// src/components/OfferCard.js
import React from 'react';
import Image from 'next/image';

export default function OfferCard({
  avatarSrc,
  name,
  nameColor = "text-gray-400",
  bubbleColor = "bg-gray-800",
  textColor = "text-gray-100",
  offerLines = [],
  isAvatarRight = false,
  highlightText = null,
  highlightColor = "text-yellow-400",
  // customBubbleClass = "" // Пока уберем, если не понадобится
}) {

  // Классы для выравнивания всего блока (аватар + пузырь)
  const alignmentClass = isAvatarRight ? "md:self-end" : "md:self-start";
  // Классы для порядка элементов внутри блока
  const avatarOrderClass = isAvatarRight ? "order-2 self-end" : "order-1 self-start";
  const bubbleOrderClass = isAvatarRight ? "order-1 items-end" : "order-2 items-start";

  return (
    <div className={`w-full flex flex-col ${alignmentClass} font-ubuntu max-w-lg lg:max-w-xl`}> {/* max-w-lg/xl для ограничения ширины карточки */}
      {/* Контейнер для пузыря и аватара, чтобы управлять их относительным положением */}
      <div className={`relative flex ${isAvatarRight ? 'flex-row-reverse' : 'flex-row'} items-end w-full`}>
        {/* Аватар */}
        <div 
            className={`flex-shrink-0 z-10 ${isAvatarRight ? 'ml-[-20px]' : 'mr-[-20px]'}`}
            style={{ marginBottom: '-10px' }} // Сдвигаем аватар немного вниз, чтобы он был под пузырем
        >
           <Image 
            src={avatarSrc} 
            alt={name || 'Аватар пользователя'} // Добавил запасной alt на всякий случай
            width={56}  // 14 (из w-14) * 4 (если 1rem=16px, то 3.5rem -> 56px)
            height={56} // 14 (из h-14) * 4 (3.5rem -> 56px)
            className="rounded-full object-cover shadow-md border-2 border-transparent group-hover:border-gray-600 transition-all"
            // Классы w-12 h-12 sm:w-14 sm:h-14 теперь не нужны здесь, 
            // так как размеры заданы через width/height.
            // Если нужен адаптивный размер контейнера, можно обернуть Image в div с этими классами и использовать fill.
          />
        </div>

        {/* Пузырь сообщения */}
        <div 
          className={`relative ${bubbleColor} rounded-lg p-4 sm:p-5 shadow-lg 
                      ${isAvatarRight ? 'rounded-br-none' : 'rounded-bl-none'} {/* "Срезаем" угол, где аватар */}
                      w-auto min-w-[280px] sm:min-w-[320px] max-w-full mb-0`} // Ширина пузыря будет по контенту, но не меньше min-w
                      // mb-0 чтобы аватар мог уйти под него
        >
          <h4 className={`text-base font-medium ${nameColor} mb-1.5`}>{name}</h4>

          {highlightText && (
            <p className={`text-base sm:text-lg font-bold ${highlightColor} mb-2 flex items-center`}>
              {highlightText.includes("АКЦИЯ!") && <span className="mr-1.5 text-xl">🔥🔥</span>} 
              {highlightText}
            </p>
          )}
          <div className={`space-y-1 ${textColor} text-sm sm:text-base font-normal leading-relaxed`}>
            {offerLines.map((line, index) => (
              typeof line === 'string' ? <p key={index}>{line}</p> : <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
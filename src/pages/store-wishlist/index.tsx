import React, { useState } from 'react'
import Shelf from '@/components/shelf'
import ptTranslations from '@/locales/br.json'
import noTranslations from '@/locales/no.json'

export default function StoreWishlist() {
  const [language, setLanguage] = useState('pt-BR')

  const translations: any = {
    'pt-BR': ptTranslations,
    'no-NO': noTranslations,
  }

  const t = translations[language]

  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center">
      <div className="pt-8">
        <div className="flex items-center justify-center py-10">
          <p>Language:</p>
          <button onClick={() => setLanguage('pt-BR')}>
            <img
              src="/assets/br.svg"
              alt="br"
              className={`w-[2rem] mx-2 hover:scale-105 ${
                language === 'pt-BR' ? '' : 'filter grayscale'
              }`}
            />
          </button>
          <button onClick={() => setLanguage('no-NO')}>
            <img
              src="/assets/no.svg"
              alt="no"
              className={`w-[1.8rem] mx-2 hover:scale-105 ${
                language === 'no-NO' ? '' : 'filter grayscale'
              }`}
            />
          </button>
        </div>
        <button className="text-white bg-[var(--primary-color-dark)] py-2 px-4 rounded-xl hover:bg-[var(--primary-color)] shadow-gray-950 shadow-sm">
          {t.store.buttonGift}
        </button>
      </div>
      <div>
        <Shelf language={language} />
      </div>

      <div className="p-8">
        <button className="text-white bg-[var(--primary-color-dark)] py-2 px-4 rounded-xl hover:bg-[var(--primary-color)] shadow-gray-950 shadow-sm">
          {t.store.buttonGift}
        </button>
      </div>
    </div>
  )
}

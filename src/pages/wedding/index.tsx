import React, { useState } from 'react'

import enTranslations from '@/locales/en.json'
import ptTranslations from '@/locales/br.json'
import noTranslations from '@/locales/no.json'

import Countdown from '@/components/countdownWedding'
import Invitation from '@/components/invitation'
import { Translation } from '@/@types/pages'

function Wedding() {
  const [language, setLanguage] = useState('pt-BR')

  const translations: Translation = {
    'en-US': enTranslations,
    'pt-BR': ptTranslations,
    'no-NO': noTranslations,
  }

  const t = translations[language]

  const weddingLocationLink = t.weddingLocationLink
  const weddingLocation = t.weddingLocation
  const weddingDescription = t.weddingDescription
  const weddingMapLink = t.weddingMapLink
  const title = t.title
  const subtitle = t.subtitle
  const invite = t.inviteCerimony

  async function handleLanguageChange(language: string) {
    setLanguage(language)
  }

  return (
    <div className="pb-10 w-full min-h-screen">
      <div className="flex items-center justify-center pt-10">
        <p>Language:</p>
        <button onClick={() => handleLanguageChange('pt-BR')}>
          <img
            src="/assets/br.svg"
            alt="br"
            className={`w-[2rem] mx-2 hover:scale-105 ${
              language === 'pt-BR' ? '' : 'filter grayscale'
            }`}
          />
        </button>
        <button onClick={() => handleLanguageChange('no-NO')}>
          <img
            src="/assets/no.svg"
            alt="no"
            className={`w-[1.8rem] mx-2 hover:scale-105 ${
              language === 'no-NO' ? '' : 'filter grayscale'
            }`}
          />
        </button>
        <button onClick={() => handleLanguageChange('en-US')}>
          <img
            src="/assets/usa.png"
            alt="us"
            className={`w-[2.1rem] mx-2 hover:scale-105 ${
              language === 'en-US' ? '' : 'filter grayscale'
            }`}
          />
        </button>
      </div>

      <div className="py-10">
        <Countdown language={language} />
      </div>

      <Invitation
        locationLink={weddingLocationLink}
        location={weddingLocation}
        description={weddingDescription}
        mapLink={weddingMapLink}
        title={title}
        subtitle={subtitle}
        invite={invite}
        language={language}
      />
    </div>
  )
}

export default Wedding

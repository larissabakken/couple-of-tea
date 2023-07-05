import React, { useState } from 'react'

import enTranslations from '@/locales/en.json'
import ptTranslations from '@/locales/br.json'
import noTranslations from '@/locales/no.json'

import Invitation from '@/components/invitation'

function WeddingReception() {
  const [language, setLanguage] = useState('pt-BR')

  const translations: any = {
    'en-US': enTranslations,
    'pt-BR': ptTranslations,
    'no-NO': noTranslations,
  }

  const t = translations[language]

  const restaurantDescription = t.restaurantDescription
  const restaurantName = t.restaurantName
  const restaurantLocationLink = t.restaurantLocationLink
  const restaurantLink = t.restaurantLink
  const restaurantLocation = t.restaurantLocation
  const restaurantMapLink = t.restaurantMapLink
  const title = t.titleReception
  const subtitle = t.subtitleReception
  const inviteReception = t.inviteReception

  async function handleLanguageChange(language: string) {
    setLanguage(language)
  }

  return (
    <div>
      <div className="w-full min-h-screen">
        <div className="flex items-center justify-center py-10">
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

        <Invitation
          description={restaurantDescription}
          name={restaurantName}
          location={restaurantLocation}
          mapLink={restaurantMapLink}
          locationLink={restaurantLocationLink}
          link={restaurantLink}
          title={title}
          subtitle={subtitle}
          invite={inviteReception}
          language={language}
        />
      </div>
    </div>
  )
}

export default WeddingReception

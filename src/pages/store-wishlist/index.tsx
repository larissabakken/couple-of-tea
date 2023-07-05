import React, { useState } from 'react'
import Shelf from '@/components/shelf'
import ptTranslations from '@/locales/br.json'
import noTranslations from '@/locales/no.json'
import Modal from '@/components/modal'
import { BiWindowClose } from 'react-icons/bi'
import Link from 'next/link'
import { GiExpand } from 'react-icons/gi'

export default function StoreWishlist() {
  const [language, setLanguage] = useState('pt-BR')
  const [modalOpen, setModalOpen] = useState(false)

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
        <button
          onClick={() => setModalOpen(true)}
          className="text-white bg-[var(--primary-color-dark)] py-2 px-4 rounded-xl hover:bg-[var(--primary-color)] shadow-gray-950 shadow-sm"
        >
          {t.store.buttonGift}
        </button>
      </div>
      <div>
        <Shelf language={language} />
      </div>

      <div className="p-8">
        <button
          onClick={() => setModalOpen(true)}
          className="text-white bg-[var(--primary-color-dark)] py-2 px-4 rounded-xl hover:bg-[var(--primary-color)] shadow-gray-950 shadow-sm"
        >
          {t.store.buttonGift}
        </button>
      </div>

      <Modal isOpen={modalOpen}>
        <div className="py-2 mb-2 max-w-2xl">
          <div className="flex justify-between">
            <h2 className="text-lg">{t.store.titleModal}</h2>
            <button
              className="text-red-600 hover:text-red-500 inline"
              onClick={() => setModalOpen(false)}
            >
              <BiWindowClose size={22} />
            </button>
          </div>
          <div className="border-pink-600 border-2 my-2" />

          <p className="my-6">
            <strong>{t.store.textModal}</strong>
          </p>
          <div className="border-pink-600 border-2 my-2" />
          <div className="text-white flex items-center justify-end">
            <button className="bg-[var(--error)] rounded-lg p-2 mx-2">
              {t.store.btnCancel}
            </button>
            <Link href={`/store-wishlist/form/${language}`}>
              <button className="bg-[var(--primary-color-dark)] rounded-lg p-2">
                {t.store.btnContinue}
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  )
}

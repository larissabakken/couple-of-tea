import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/modal'
import Link from 'next/link'
import Products from '@/locales/products.json'
import { BiWindowClose } from 'react-icons/bi'
import { GiExpand } from 'react-icons/gi'
import Soldout from '@/components/soldout'

interface ShelfProps {
  language: string | 'pt-BR' | 'no-NO'
}

export default function Shelf({ language }: ShelfProps) {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setModalOpenIndex(index)
  }

  const closeModal = () => {
    setModalOpenIndex(null)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-16 lg:max-w-6xl lg:px-8 h-full">
      <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {Products?.map((product, index) => (
          <div key={index}>
            <Soldout />
            <div className="bg-gray-200 p-4 rounded-md shadow-sm hover:shadow-xl transition-shadow duration-500 h-full">
              <div className="w-full h-[20rem] bg-white rounded-lg pb-2">
                <Image
                  src={product.image}
                  width={200}
                  height={200}
                  alt={language === 'pt-BR' ? product.nameBR : product.nameNOK}
                  className="h-full w-full object-cover p-4"
                />
              </div>

              <div className="mt-4 flex flex-col">
                <div>
                  <h3 className="text-[15px] text-gray-700 font-bold truncate">
                    {language === 'pt-BR' ? product.nameBR : product.nameNOK}
                  </h3>
                </div>

                <div>
                  <p className="my-1 text-[17px] text-gray-500 truncate">
                    {language === 'pt-BR'
                      ? product.descriptionBR
                      : product.descriptionNOK}
                  </p>
                </div>
              </div>

              <div
                className="py-2 text-[var(--primary-color-dark)] hover:text-[var(--primary-color)] cursor-pointer flex justify-start items-center"
                onClick={() => openModal(index)}
              >
                <GiExpand className="inline mr-2" size={22} />
                {language === 'pt-BR'
                  ? 'Ver mais detalhes'
                  : 'Se flere detaljer'}
              </div>
            </div>
            <Modal isOpen={modalOpenIndex === index} key={index}>
              <div className="py-2 mb-2 max-w-2xl">
                <div className="flex justify-between">
                  <h2 className="text-lg">
                    {language === 'pt-BR'
                      ? 'Detalhes do Produto'
                      : 'Produktdetaljer'}
                  </h2>
                  <button
                    className="text-red-600 hover:text-red-500 inline"
                    onClick={closeModal}
                  >
                    <BiWindowClose size={22} />
                  </button>
                </div>
                <div className="border-pink-600 border-2 my-2" />
                <p>
                  <strong>
                    {language === 'pt-BR' ? 'Produto:' : 'Produkt:'}
                  </strong>
                  {language === 'pt-BR' ? product.nameBR : product.nameNOK}
                </p>
                <p>
                  <strong>
                    {language === 'pt-BR' ? 'Descrição:' : 'Description'}
                  </strong>
                  {language === 'pt-BR'
                    ? product.descriptionBR
                    : product.descriptionNOK}
                </p>
                <p>
                  <strong>
                    {language === 'pt-BR'
                      ? `R$${product.priceBR}`
                      : `Kr ${product.priceNOK}`}
                  </strong>
                </p>
                <p>
                  <strong>Link:</strong>
                  <Link
                    className="text-[var(--primary-color)]"
                    href={product.link}
                  >
                    {' '}
                    {product.link}{' '}
                  </Link>
                </p>
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  )
}

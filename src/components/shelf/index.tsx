import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { HiOutlineArrowsPointingOut } from 'react-icons/hi2'
import { TbShoppingCartPlus } from 'react-icons/tb'
import Modal from '@/components/modal'
export default function Shelf() {
  const [modalOpenDetails, setModalOpenDetails] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  async function openModalDetails() {
    setModalOpenDetails(true)
  }
  async function openModal() {
    setModalOpen(true)
  }
  async function closeModal() {
    setModalOpen(false)
    setModalOpenDetails(false)
  }

  const products = [
    {
      id: 1,
      nameNOK: 'Skittentøykurv',
      nameBRL: 'cesto de roupa suja',
      descriptionNOK: 'Skittentøykurv, hvit, 70 l',
      descriptionBRL: 'Cesto de roupa suja, branco, 70 litros',
      priceNOK: 89,
      priceBRL: 41,
      quantity: 4,
      link: 'https://www.ikea.com/no/no/p/jaell-skittentoykurv-hvit-70118968/',
      image:
        'https://www.ikea.com/no/no/images/products/jaell-skittentoykurv-hvit__0612577_ph136104_s5.jpg?f=l',
    },
    {
      id: 2,
      nameNOK: 'Skittentøykurv',
      nameBRL: 'cesto de roupa suja',
      descriptionNOK: 'Skittentøykurv, hvit, 70 l',
      descriptionBRL: 'Cesto de roupa suja, branco, 70 litros',
      priceNOK: 89,
      priceBRL: 41,
      quantity: 4,
      link: 'https://www.ikea.com/no/no/p/jaell-skittentoykurv-hvit-70118968/',
      image:
        'https://www.ikea.com/no/no/images/products/jaell-skittentoykurv-hvit__0612577_ph136104_s5.jpg?f=l',
    },
    {
      id: 3,
      nameNOK: 'Dørmatte',
      nameBRL: 'tapete de porta',
      descriptionNOK: 'Dørmatte, mørk blå, 35x55 cm',
      descriptionBRL: 'Tapete de porta, azul escuro, 35x55 cm',
      priceNOK: 12,
      priceBRL: 5.5,
      quantity: 5,
      link: 'https://www.ikea.com/no/no/p/kristrup-dormatte-mork-bla-90392452/',
      image:
        'https://www.ikea.com/no/no/images/products/kristrup-dormatte-mork-bla__0892322_pe619701_s5.jpg?f=l',
    },
    {
      id: 4,
      nameNOK: 'Dørmatte',
      nameBRL: 'tapete de porta',
      descriptionNOK:
        'Antall brødskiver: 2 skiver, Funksjoner: Trekk-ut smulebrett, Stoppfunksjon, Opptiningsfunksjon, Effekt: 950 W',
      descriptionBRL: 'Tapete de porta, azul escuro, 35x55 cm',
      priceNOK: 12,
      priceBRL: 5.5,
      quantity: 5,
      link: 'https://www.ikea.com/no/no/p/kristrup-dormatte-mork-bla-90392452/',
      image:
        'https://www.ikea.com/no/no/images/products/kristrup-dormatte-mork-bla__0892322_pe619701_s5.jpg?f=l',
    },
  ]

  return (
    <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 h-full">
      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((product, index) => (
          <div key={index}>
            <Modal isOpen={modalOpen}>
              <div className="py-2 m-2">
                <h2>Conteúdo do Modal</h2>
                <p>Este é um exemplo de modal simples.</p>
              </div>
              <div className="flex justify-between m-2 text-white">
                <button
                  className="rounded-lg bg-[var(--primary-color)] py-2 px-4 shadow-gray-700 shadow-sm hover:bg-[var(--primary-color-dark)]"
                  onClick={closeModal}
                >
                  Continuar
                </button>

                <button
                  className="rounded-lg bg-[var(--error)] py-2 px-4 shadow-gray-700 shadow-sm hover:bg-[var(--secondary-color-dark)]"
                  onClick={closeModal}
                >
                  Fechar
                </button>
              </div>
            </Modal>

            <Modal isOpen={modalOpenDetails}>
              <div className="py-2 m-2">
                <h2>Conteúdo do Modal</h2>
                <p>
                  Este é um exemplo de modal simples sdjasdjaiosjdiaosjd
                  aisdjsaio djaiod j
                </p>
              </div>
              <div className="flex justify-between m-2 text-white">
                <button
                  className="rounded-lg bg-[var(--primary-color)] py-2 px-4 shadow-gray-700 shadow-sm hover:bg-[var(--primary-color-dark)]"
                  onClick={closeModal}
                >
                  Continuar
                </button>

                <button
                  className="rounded-lg bg-[var(--error)] py-2 px-4 shadow-gray-700 shadow-sm hover:bg-[var(--secondary-color-dark)]"
                  onClick={closeModal}
                >
                  Fechar
                </button>
              </div>
            </Modal>

            <div className="bg-[var(--baground)] p-4 rounded-md shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="w-full h-full bg-white rounded-lg pb-2">
                <Image
                  src={product.image}
                  width={200}
                  height={200}
                  alt={product.nameNOK}
                  className="h-full w-full object-cover p-4"
                />
              </div>

              <div className="mt-4 flex flex-col">
                <div>
                  <h3 className="text-[15px] text-gray-700 font-bold truncate">
                    {product.nameNOK}
                  </h3>
                </div>

                <div>
                  <p className="my-1 text-[17px] text-gray-500 truncate">
                    {product.descriptionNOK}
                  </p>
                </div>

                <div className="flex justify-around lg:flex-col-reverse items-start lg:items-stretch my-2">
                  <div className="mt-4 text-center">
                    <button
                      onClick={openModal}
                      className="text-sm bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-dark)] px-6 py-1.5 rounded-lg text-white shadow-sm shadow-pink-200"
                    >
                      Quero presentear
                      <TbShoppingCartPlus className="inline ml-4" size={18} />
                    </button>
                  </div>
                  <div className="flex-row-reverse lg:flex justify-between">
                    <p className="text-[17px] font-medium text-gray-900 text-right">
                      Kr: {product.priceNOK}
                    </p>
                    <p
                      className="text-sm text-[var(--primary-color-dark)] hover:text-[var(--primary-color)] text-right"
                      onClick={openModalDetails}
                    >
                      <HiOutlineArrowsPointingOut
                        className="inline mx-1"
                        size={18}
                      />
                      Detalhes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

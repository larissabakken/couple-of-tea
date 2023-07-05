import React, { useState } from 'react'
import Image from 'next/image'
import { HiOutlineArrowsPointingOut } from 'react-icons/hi2'
import { TbShoppingCartPlus } from 'react-icons/tb'
import Modal from '@/components/modal'
import Link from 'next/link'
import Products from '@/locales/products.json'
import { BiWindowClose } from 'react-icons/bi'
export default function Shelf() {
  const [modalOpenDetails, setModalOpenDetails] = useState(false)

  async function openModalDetails() {
    setModalOpenDetails(true)
  }

  async function closeModal() {
    setModalOpenDetails(false)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-16 lg:max-w-6xl lg:px-8 h-full">
      <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {Products?.map((product, index) => (
          <div key={index}>
            <div className="bg-gray-200 p-4 rounded-md shadow-sm hover:shadow-xl transition-shadow duration-500 h-full">
              <div className="w-full h-[20rem] bg-white rounded-lg pb-2">
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
              </div>
            </div>
            <Modal isOpen={modalOpenDetails} key={index}>
              <div className="py-2 mb-2 max-w-2xl">
                <div className="flex justify-between">
                  <h2 className="text-lg">Detalhes do Produto</h2>
                  <button
                    className="text-red-600 hover:text-red-500 inline"
                    onClick={closeModal}
                  >
                    <BiWindowClose size={22} />
                  </button>
                </div>
                <div className="border-pink-600 border-2 my-2" />
                <p>
                  <strong>Produto:</strong> {product.nameBRL}
                </p>
                <p>
                  <strong>Descrição:</strong> {product.descriptionBRL}
                </p>
                <p>
                  <strong>R${product.priceBRL}</strong>
                </p>
                <p>
                  <strong>Quantidade:</strong> {product.quantity}
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

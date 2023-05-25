import React from 'react'
import Image from 'next/image'
import { FiMoreHorizontal } from 'react-icons/fi'
import { TbShoppingCartPlus } from 'react-icons/tb'
export default function Shelf() {
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
      descriptionNOK: 'Dørmatte, mørk blå, 35x55 cm',
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
    <div>
      <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products?.map((product, index) => (
            <div key={index}>
              <div className="bg-gray-100 p-6 rounded-md shadow-sm hover:shadow-xl">
                <div className="w-full bg-white rounded-sm pb-2">
                  <Image
                    src="/assets/bite.png"
                    width={200}
                    height={200}
                    alt={product.nameNOK}
                    className="h-full w-full object-cover p-4"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.nameNOK}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.descriptionNOK}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Kr: {product.priceNOK}
                  </p>
                </div>
                <div className="mt-4 flex justify-between">
                  <button className="text-sm bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-dark)] px-3 py-1 rounded-lg text-white shadow-pink-300 shadow-lg">
                    Quero presentear{' '}
                    <TbShoppingCartPlus className="inline" size={20} />
                  </button>
                  <button className="p-1 text-[var(--primary-color-dark)] font-bold hover:text-[var(--primary-color)]">
                    Detalhes <FiMoreHorizontal className="inline" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

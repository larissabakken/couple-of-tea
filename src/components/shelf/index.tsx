import React from 'react'
import Image from 'next/image'
export default function Shelf() {
  const products = [
    {
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
  ]
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Whishlist
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.nameNOK}>
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.nameNOK}
                  className="h-full w-full object-contain object-center p-4"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.nameNOK}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.descriptionNOK}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Kr: {product.priceNOK}
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg text-[var(--secondary-color)] shadow-pink-200 shadow-lg">
                  Detalhes
                </button>
                <button className="bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-dark)] p-2 rounded-lg text-white shadow-pink-300 shadow-lg">
                  Quero presentear
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

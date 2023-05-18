import React from 'react'
export default function Shelf() {
  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'TV 55',
      href: '#',
      imageSrc: 'https://m.media-amazon.com/images/I/81uqvAUrHkL._AC_SL1500_.jpghttps://m.media-amazon.com/images/I/81uqvAUrHkL._AC_SL1500_.jpg',
      imageAlt: "Tv 55' smart",
      price: '$35',
    },
    {
      "nameNOK": "Dørmatte",
      "nameBRL":  "tapete de porta",
      "descriptionNOK": "Dørmatte, mørk blå, 35x55 cm",
      "descriptionBRL": "Tapete de porta, azul escuro, 35x55 cm",
      "priceNOK": 12,
      "priceBRL": 5.50,
      "quantity": 5,
      "link": "https://www.ikea.com/no/no/p/kristrup-dormatte-mork-bla-90392452/",
      "image": "https://www.ikea.com/no/no/images/products/kristrup-dormatte-mork-bla__0892322_pe619701_s5.jpg?f=l"
    },
    {
      "nameNOK": "Skittentøykurv",
      "nameBRL":  "cesto de roupa suja",
      "descriptionNOK": "Skittentøykurv, hvit, 70 l",
      "descriptionBRL": "Cesto de roupa suja, branco, 70 litros",
      "priceNOK": 89,
      "priceBRL": 41,
      "quantity": 4,
      "link": "https://www.ikea.com/no/no/p/jaell-skittentoykurv-hvit-70118968/",
      "image": "https://www.ikea.com/no/no/images/products/jaell-skittentoykurv-hvit__0612577_ph136104_s5.jpg?f=l"
    },
  ]
  return (
    <div>
      <div className="">
      <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Whishlist</h2>
        
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center p-4"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
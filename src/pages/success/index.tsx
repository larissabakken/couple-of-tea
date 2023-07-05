import React from 'react'

export default function Index() {
  const astrid =
    'https://tyr-fenrir.s3.sa-east-1.amazonaws.com/cot-site/bank.jpeg'

  const larissa =
    'https://tyr-fenrir.s3.sa-east-1.amazonaws.com/cot-site/pix.jpeg'

  return (
    <div className="h-[90vh] mx-auto w-full py-10 px-4 py-18 sm:px-6 sm:py-16 lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div className="bg-gray-200 p-4 rounded-md shadow-sm hover:shadow-xl transition-shadow duration-500 h-full">
          <p className={'text-center my-4'}>
            Om du har en norsk konto, send til Astrid.
          </p>
          <div className="w-full h-full rounded-lg pb-2">
            <img src={astrid} alt={'bank'} />
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded-md shadow-sm hover:shadow-xl transition-shadow duration-500 h-full">
          <p className={'text-center my-4'}>
            Se você tem uma conta brasileira, envie para Larissa.
          </p>
          <div className="w-full h-full rounded-lg pb-2">
            <img src={larissa} alt={'bank'} />
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded-md shadow-sm hover:shadow-xl transition-shadow duration-500 h-full">
          <p className={'text-center mx-2'}>
            Se preferiu comprar o presente e nos enviar, aqui está o endereço!
          </p>
          <p className={'text-center my-4'}>
            Hvis du foretrekker å kjøpe gaven og sende den til oss, her er
            adressen!
          </p>
          <div className="w-full rounded-lg pb-2 bg-white p-2">
            <p>Name: Astrid Bakken</p>
            <p>Address: Blåbergveien 7, 1389 Heggedal</p>
            <p>Country: Norway</p>
          </div>
        </div>
      </div>
    </div>
  )
}

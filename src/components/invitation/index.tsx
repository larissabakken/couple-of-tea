import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { GiClick } from 'react-icons/gi'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

interface InvitationProps {
  name?: string
  link?: string
  locationLink: string
  location: string
  description: string
  mapLink: string
  title: string
  subtitle: string
  invite: string
  language: string
}

const Invitation: React.FC<InvitationProps> = ({
  name,
  location,
  description,
  mapLink,
  locationLink,
  link,
  title,
  subtitle,
  invite,
  language,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1)
      } else {
        setIsLoading(false)
        clearInterval(timer)
      }
    }, 2000)

    return () => clearInterval(timer)
  }, [countdown])

  const toggleMeal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="max-w-2xl mx-2 sm:mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="text-sm font-medium text-gray-700 py-2">{subtitle}</p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div
            className="bg-white px-4 py-5 sm:grid sm:px-6 cursor-pointer hover:bg-[var(--secondary-color)] hover:text-white"
            onClick={toggleMeal}
          >
            <div className="text-sm font-bold">
              {invite}
              {isOpen ? (
                <IoIosArrowDropup className="inline mx-4" size={25} />
              ) : (
                <IoIosArrowDropdown className="inline mx-4" size={25} />
              )}
            </div>
          </div>
          <div className="bg-white px-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 cursor-pointer">
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isOpen && (
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      {name && (
                        <>
                          <dt className="text-sm font-medium text-gray-500">
                            {language === 'pt-BR'
                              ? 'Data da celebração'
                              : language === 'en-US'
                              ? 'Celebration Date'
                              : 'Feiring Dato'}
                          </dt>

                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                            {language === 'pt-BR'
                              ? '29 de Julho as 11am, será após o casamento'
                              : language === 'en-US'
                              ? 'July 29th at 4:00 PM, will be after the wedding'
                              : '29. juli kl 4:00 PM, vil være etter bryllupet'}
                          </dd>
                        </>
                      )}
                    </div>
                    {name && (
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {language === 'pt-BR'
                            ? 'Nome'
                            : language === 'en-US'
                            ? 'Name'
                            : 'Navn'}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                          {name}
                        </dd>
                      </div>
                    )}

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        {language === 'pt-BR'
                          ? 'Local'
                          : language === 'en-US'
                          ? 'Location'
                          : 'Beliggenhed'}
                      </dt>
                      <Link href={locationLink}>
                        <dd className="mt-1 text-sm text-[var(--primary-color-dark)] sm:mt-0 sm:col-span-1">
                          {location} <GiClick className="inline" />
                        </dd>
                      </Link>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        {language === 'pt-BR'
                          ? 'Descrição'
                          : language === 'en-US'
                          ? 'Description'
                          : 'Beskrivelse'}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {description}
                      </dd>
                    </div>
                    {link && (
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {language === 'pt-BR'
                            ? 'Link'
                            : language === 'en-US'
                            ? 'Link'
                            : 'Link'}
                        </dt>

                        <Link href={link}>
                          <dd className="mt-1 text-sm text-[var(--primary-color-dark)] sm:mt-0 sm:col-span-1">
                            {name} website <GiClick className="inline" />
                          </dd>
                        </Link>
                      </div>
                    )}
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                      ) : (
                        <iframe src={mapLink}></iframe>
                      )}
                    </div>
                  </dl>
                </div>
              )}
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Invitation

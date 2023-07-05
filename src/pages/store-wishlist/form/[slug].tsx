import React, { useState } from 'react'
import Link from 'next/link'
import ptTranslations from '@/locales/br.json'
import noTranslations from '@/locales/no.json'
import { useRouter } from 'next/router'

export default function Form() {
  const router = useRouter()
  const language = router.query.slug as string

  const translations: any = {
    'pt-BR': ptTranslations,
    'no-NO': noTranslations,
  }

  const t = translations[language]

  const handleEmail = async () => {
    try {
      const response = await fetch('/api/email', { method: 'POST' })
      if (response.ok) {
        console.log('Email sent successfully')
      } else {
        console.error('Failed to send email:', response.status)
      }
    } catch (error) {
      console.error('Failed to send email:', error)
    }
  }

  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center">
      <div className="min-w-[5rem] mx-10">
        <form>
          <div className="border-b border-gray-900/10 py-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              {t.store.form.title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {t.store.form.subtitle}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t.store.form.name}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t.store.form.email}
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t.store.form.phone}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  {t.store.form.cart}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {t.store.form.cartDescription}
                </p>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Mensagem
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Se você quiser nos escrever um cartão presente, escreva aqui!
                  👇
                </p>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12 pt-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              {t.store.form.payTitle}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {t.store.form.payDescription}
            </p>

            <div className="mt-2 space-y-10">
              <fieldset>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="bank"
                      name="payment"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-[var(--primary-color-dark)] focus:ring-[var(--primary-color-dark)]"
                    />
                    <label
                      htmlFor="bank"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {t.store.form.payOptions.option1}
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="delivery"
                      name="payment"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-[var(--primary-color-dark)] focus:ring-[var(--primary-color-dark)]"
                    />
                    <label
                      htmlFor="delivery"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {t.store.form.payOptions.option2}
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="nothing"
                      name="payment"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-[var(--primary-color-dark)] focus:ring-[var(--primary-color-dark)]"
                    />
                    <label
                      htmlFor="nothing"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {t.store.form.payOptions.option3}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="my-6 flex items-center justify-end gap-x-6">
            <Link href={'/store-wishlist'}>
              <button className="text-sm font-semibold leading-6 text-gray-900 px-5">
                {t.store.btnCancel}
              </button>
            </Link>

            <button
              type="submit"
              className="rounded-md bg-[var(--primary-color)] px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-color-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color-dark)]"
            >
              {t.store.btnContinue}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import Link from 'next/link'
import ptTranslations from '@/locales/br.json'
import noTranslations from '@/locales/no.json'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

export default function Form() {
  const router = useRouter()
  const language = router.query.slug as string
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>()

  const translations: any = {
    'pt-BR': ptTranslations,
    'no-NO': noTranslations,
  }

  const t = translations[language]

  const handleEmail = async () => {
    // try {
    //   const response = await fetch('/api/email', { method: 'POST' })
    //   if (response.ok) {
    //     console.log('Email sent successfully')
    //   } else {
    //     console.error('Failed to send email:', response.status)
    //   }
    // } catch (error) {
    //   console.error('Failed to send email:', error)
    // }
  }
  const onSubmit: SubmitHandler<any> = (data) => console.log(data)

  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center">
      <div className="min-w-[5rem] mx-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border-b border-gray-900/10 py-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              {t.store.form.title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {t.store.form.subtitle}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t.store.form.name}
                </label>
                <div className="mt-2">
                  <input
                    {...register('name', { required: true })}
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t.store.form.email}
                </label>
                <div className="mt-2">
                  <input
                    {...register('email')}
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  {t.store.form.phone}
                </label>
                <div className="mt-2">
                  <input
                    {...register('phone')}
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
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
                    {...register('cart')}
                    defaultValue={'...'}
                    rows={3}
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  {t.store.form.message}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {t.store.form.messageDescription}
                </p>
                <div className="mt-2">
                  <textarea
                    {...register('message')}
                    rows={8}
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color-dark)] sm:text-sm sm:leading-6"
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

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  <input
                    className="h-4 w-4 border-gray-300 text-[var(--primary-color-dark)] focus:ring-[var(--primary-color-dark)] mr-4"
                    type="radio"
                    value={t.store.form.payOptions.option1}
                    {...register('payOption')}
                  />
                  {t.store.form.payOptions.option1}
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  <input
                    className="h-4 w-4 border-gray-300 text-[var(--primary-color-dark)] focus:ring-[var(--primary-color-dark)] mr-4"
                    type="radio"
                    value={t.store.form.payOptions.option2}
                    {...register('payOption')}
                  />
                  {t.store.form.payOptions.option2}
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  <input
                    className="h-4 w-4 border-gray-300 text-[var(--primary-color-dark)] focus:ring-[var(--primary-color-dark)] mr-4"
                    type="radio"
                    value={t.store.form.payOptions.option3}
                    {...register('payOption')}
                  />
                  {t.store.form.payOptions.option3}
                </label>
              </div>
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

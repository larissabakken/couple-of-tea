import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { AiFillGift, AiOutlineCloseCircle } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { RiLiveFill } from 'react-icons/ri'
import { GiLovers } from 'react-icons/gi'
import { FaGlassCheers } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const wedding = [
  {
    name: "You're invited to our wedding!",
    description: 'Please join us for our wedding ceremony.',
    href: '/wedding',
    icon: RiLiveFill,
  },
  {
    name: "You're invited to our celebratory meal!",
    description: 'Please join us for a celebratory meal.',
    href: '/wedding-reception',
    icon: FaGlassCheers,
  },
  {
    name: 'Wedding Gift List',
    description: 'Check out our registry to give us a special gift!',
    href: '/store-wishlist',
    icon: AiFillGift,
  },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[var(--background)] shadow-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Couple of Tea</span>
            <Image src="/assets/web.png" alt="couple" width={60} height={40} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <CiMenuKebab className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Wedding
              <GiLovers
                className="h-5 w-5 flex-none text-[var(--secondary-color)] mx-1"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {wedding.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6  p-4 text-sm leading-6"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[var(--seconday-color-dark)] group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-[var(--primary-color-dark)]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/*<div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-[var(--seconday-color-dark)]">*/}
                {/*  <p className="flex items-center justify-center p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">*/}
                {/*    <Countdown language={'en'} />*/}
                {/*  </p>*/}
                {/*</div>*/}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/travel"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Next Travel
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Memories
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Couple of Tea</span>
              <Image
                width={100}
                height={100}
                src="/assets/web.png"
                alt="couple of tea"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineCloseCircle className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[var(--seconday-color-dark)]0/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">
                        Wedding
                        <GiLovers
                          className={classNames(
                            open ? 'text-[var(--secondary-color)]' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...wedding].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/travel"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
                >
                  Next Travel
                </Link>
                <Link
                  href="/memories"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
                >
                  Memories
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

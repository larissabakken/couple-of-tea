import React, { useState } from 'react'
import Link from 'next/link'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'

export default function Header() {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <div className="w-full h-[5rem] shadow-xl z-[108]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[var(--background)]">
          <ul className="hidden md:flex mr-9">
            {/* <li className="ml-10 ">
              <ButtonMode />
            </li> */}
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/wedding">
              <li className="ml-10 text-sm hover:border-b">Wedding</li>
            </Link>
            <Link href="/memories">
              <li className="ml-10 text-sm hover:border-b">Memories</li>
            </Link>
            <Link href="/travel">
              <li className="ml-10 text-sm hover:border-b">Next Travel</li>
            </Link>
          </ul>
          <div className="mx-4">
            <Image src="/assets/web.png" width={100} height={100} alt="logo" />
          </div>
          <div onClick={handleNav} className="md:hidden mx-5">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            !nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50'
              : ''
          }
        >
          <div
            className={
              !nav
                ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w[60%] md:w[45%] h-screen p-10 ease-in duration-500 bg-[var(--background)]'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div className="flex w-full">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[var(--secondary-color)] p-2 ml-auto"
              >
                <AiOutlineClose size={10} />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start h-full">
              <ul>
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/wedding">
                  <li className="py-4 text-sm">Wedding</li>
                </Link>
                <Link href="/memories">
                  <li className="py-4 text-sm">Memories</li>
                </Link>
                <Link href="/travel">
                  <li className="py-4 text-sm">Next Travel</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

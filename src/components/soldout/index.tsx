import React from 'react'
import { FaGlassCheers } from 'react-icons/fa'

export default function Soldout() {
  return (
    <>
      {/*<div className="absolute bg-[var(--primary-color-dark)] rounded-full p-2 animate-pulse w-1/2">*/}
      {/*  <div className={'flex justify-evenly items-center text-white'}>*/}
      {/*    <svg*/}
      {/*      className="w-8 h-8 text-white"*/}
      {/*      fill="none"*/}
      {/*      viewBox="0 0 24 24"*/}
      {/*      stroke="currentColor"*/}
      {/*    >*/}
      {/*      <path*/}
      {/*        strokeLinecap="round"*/}
      {/*        strokeLinejoin="round"*/}
      {/*        strokeWidth="2"*/}
      {/*        d="M5 13l4 4L19 7"*/}
      {/*      />*/}
      {/*    </svg>*/}
      {/*    <p>Avaible</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="absolute bg-[var(--secondary-color-dark)] rounded-full p-2 animate-pulse w-1/2">
        <div className={'flex justify-evenly items-center text-white'}>
          <FaGlassCheers className="w-8 h-8 text-white inline" />
          <p>Gifted</p>
        </div>
      </div>
    </>
  )
}

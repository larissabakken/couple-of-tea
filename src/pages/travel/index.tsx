import React from 'react'
import Image from 'next/image'

import Countdown from '@/components/countdown'

import { RiFlightTakeoffFill, RiFlightLandLine } from 'react-icons/ri'

function Travel() {
  return (
    <>
      <div className="w-full h-[90vh] flex justify-center items-center flex-col">
        <div>
          <Image src="/assets/excited.gif" alt="br" width={200} height={200} />
        </div>
        <div>
          <Countdown date={'December 19, 2023 17:00:00 GMT+0100'} />
        </div>
        <div className="flex justify-between w-[20rem]">
          <img src="/assets/br.svg" alt="br" className="w-[3rem] mx-2" />
          <RiFlightTakeoffFill className="inline" size={35} />
          <RiFlightLandLine className="inline" size={35} />
          <img src="/assets/no.svg" alt="no" className="w-[2.5rem] mx-2" />
        </div>
      </div>
    </>
  )
}

export default Travel

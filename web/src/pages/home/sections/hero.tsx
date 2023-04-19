import React from "react";
import Image from "next/image";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div>
        <h1 className="mb-1 font-mono text-4xl text-gray-900 md:text-6xl">
          Welcome to <br className="block md:hidden" />
          <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
            Couple Of Tea 👋
          </span>
          <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-black md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
        </h1>
      </div>

      <div className="p-2">
        <Image src="/assets/web.png" width={300} height={300} alt="logo" />
      </div>
      {/* <div className="p-2">
        <BsFillArrowDownCircleFill
          size={50}
          color="#b380ca"
          className="animate-bounce"
        />
      </div> */}
    </div>
  );
}

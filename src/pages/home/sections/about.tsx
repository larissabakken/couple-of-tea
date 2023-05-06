import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-screen flex items-start justify-center flex-col px-10">
      <div>
        <h4 className="mb-1 text-gray-900 text-2xl">
          <span className="inline-flex h-20 pt-2 whitespace-nowraps text-[var(--secondary-color)] font-bold">
            About
          </span>
          <span className="box-border inline-block w-1 h-7 ml-2 -mb-1 bg-gray-600 md:-mb-1 md:h-6 animate-cursor will-change-transform"></span>
        </h4>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 py-1">
            <p className="py-1">
              Welcome to our website, a place where we share our memories and
              love for each other.
            </p>
            <p className="py-1">
              Through this platform, we invite you to join us on our journey, as
              we reminisce about our special moments and showcase our affection
              in a visual and interactive way.
            </p>
            <p className="py-1">
              Here, you'll find various sections that represent different facets
              of our relationship. From our cherished memories to the little
              things that make us smile, we hope to give you a glimpse into our
              love story.
            </p>
            <p className="py-1">
              Explore the different areas, interact with the elements, and feel
              the warmth of our affection.
            </p>
            <p className="py-1">
              I've created this website as a tribute to our love, a place where
              we can celebrate the bond that we share. It's a reflection of our
              journey, our joys, and our hopes for the future. So come along,
              and join us as we share our story with you
            </p>
          </div>
          <div className="w-full md:w-1/2 py-1 flex justify-center">
            <Image
              src="/assets/cuddle.gif"
              alt="br"
              width={300}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

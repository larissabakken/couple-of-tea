import React from "react";

export default function About() {
  return (
    <div className="w-full h-screen flex items-start justify-center flex-col px-10">
      <div>
        <h4 className="mb-1 text-gray-900 md:text-xl">
          <span className="inline-flex h-20 pt-2 whitespace-nowraps">
            About
          </span>
          <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-gray-600 md:-mb-2 md:h-6 animate-cursor will-change-transform"></span>
        </h4>
        <div className="w-[50%]">
          <p>
            Welcome to our website, a place where we share our memories and love
            for each other.
          </p>
          <p>
            Through this platform, we invite you to join us on our journey, as
            we reminisce about our special moments and showcase our affection in
            a visual and interactive way.
          </p>
          <p>
            Here, you'll find various sections that represent different facets
            of our relationship. From our cherished memories to the little
            things that make us smile, we hope to give you a glimpse into our
            love story.
          </p>
          <p>
            Explore the different areas, interact with the elements, and feel
            the warmth of our affection.
          </p>
          <p>
            I've created this website as a tribute to our love, a place where we
            can celebrate the bond that we share. It's a reflection of our
            journey, our joys, and our hopes for the future. So come along, and
            join us as we share our story with you
          </p>
        </div>
      </div>
    </div>
  );
}

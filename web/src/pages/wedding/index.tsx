import React, { useState } from "react";
import Image from "next/image";

import enTranslations from "@/locales/en.json";
import ptTranslations from "@/locales/br.json";
import noTranslations from "@/locales/no.json";

import Header from "@/components/header";
import Countdown from "@/components/countdownWedding";
import Invitation from "@/components/invitation";

type Translation = {
  [key: string]: {
    restaurantDescription: string;
    restaurantName: string;
    restaurantLocationLink: string;
    restaurantLink: string;
    restaurantLocation: string;
    restaurantMapLink: string;
    weddingLocationLink: string;
    weddingLocation: string;
    weddingDescription: string;
    weddingMapLink: string;
    title: string;
    subtitle: string;
    inviteCerimony: string;
    inviteReception: string;
  };
};

function Wedding() {
  const [language, setLanguage] = useState("en-US");

  const translations: Translation = {
    "en-US": enTranslations,
    "pt-BR": ptTranslations,
    "no-NO": noTranslations,
  };

  const t = translations[language];

  const restaurantDescription = t.restaurantDescription;
  const restaurantName = t.restaurantName;
  const restaurantLocationLink = t.restaurantLocationLink;
  const restaurantLink = t.restaurantLink;
  const restaurantLocation = t.restaurantLocation;
  const restaurantMapLink = t.restaurantMapLink;
  const weddingLocationLink = t.weddingLocationLink;
  const weddingLocation = t.weddingLocation;
  const weddingDescription = t.weddingDescription;
  const weddingMapLink = t.weddingMapLink;
  const title = t.title;
  const subtitle = t.subtitle;
  const inviteCerimony = t.inviteCerimony;
  const inviteReception = t.inviteReception;

  async function handleLanguageChange(language: string) {
    setLanguage(language);
  }

  return (
    <div>
      <Header />

      <div className="py-20 sm:py-48">
        <div className="flex items-center justify-center">
          <button onClick={() => handleLanguageChange("pt-BR")}>
            <Image
              src="/assets/br.svg"
              width={100}
              height={100}
              alt="br"
              className="rounded-full shadow-2xl w-[4rem] mx-2 hover:scale-105"
            />
          </button>
          <button onClick={() => handleLanguageChange("no-NO")}>
            <Image
              src="/assets/no.svg"
              width={100}
              height={100}
              alt="no"
              className="rounded-full shadow-2xl w-[4rem] mx-2 hover:scale-105"
            />
          </button>
          <button onClick={() => handleLanguageChange("en-US")}>
            <div className="rounded-full shadow-2xl w-auto h-[2rem] mx-2 hover:scale-105">
              <Image src="/assets/us.svg" width={100} height={100} alt="us" />
            </div>
          </button>
        </div>

        <div className="py-10">
          <Countdown />
        </div>
        <Invitation
          restaurantDescription={restaurantDescription}
          restaurantName={restaurantName}
          restaurantLocation={restaurantLocation}
          restaurantMapLink={restaurantMapLink}
          restaurantLocationLink={restaurantLocationLink}
          restaurantLink={restaurantLink}
          weddingLocationLink={weddingLocationLink}
          weddingLocation={weddingLocation}
          weddingDescription={weddingDescription}
          weddingMapLink={weddingMapLink}
          title={title}
          subtitle={subtitle}
          inviteCerimony={inviteCerimony}
          inviteReception={inviteReception}
        />
      </div>
    </div>
  );
}

export default Wedding;

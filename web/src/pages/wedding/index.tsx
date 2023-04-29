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
  const [language, setLanguage] = useState("pt-BR");

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
        <div className="flex items-center justify-center pt-10">
          <p>Language:</p>
          <button onClick={() => handleLanguageChange("pt-BR")}>
            <img
              src="/assets/br.svg"
              alt="br"
              className={`w-[2rem] mx-2 hover:scale-105 ${
                language === "pt-BR" ? "" : "filter grayscale"
              }`}
            />
          </button>
          <button onClick={() => handleLanguageChange("no-NO")}>
            <img
              src="/assets/no.svg"
              alt="no"
              className={`w-[1.8rem] mx-2 hover:scale-105 ${
                language === "no-NO" ? "" : "filter grayscale"
              }`}
            />
          </button>
          <button onClick={() => handleLanguageChange("en-US")}>
            <img
              src="/assets/usa.png"
              alt="us"
              className={`w-[2.1rem] mx-2 hover:scale-105 ${
                language === "en-US" ? "" : "filter grayscale"
              }`}
            />
          </button>
        </div>

        <div className="py-10">
          <Countdown language={language} />
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
          language={language}
        />
      </div>
    </div>
  );
}

export default Wedding;

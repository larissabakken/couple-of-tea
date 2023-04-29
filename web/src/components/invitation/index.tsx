import React, { useState } from "react";
import Link from "next/link";
import { GiClick } from "react-icons/gi";

import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

interface InvitationProps {
  restaurantName: string;
  restaurantLocation: string;
  restaurantDescription: string;
  restaurantMapLink: string;
  restaurantLocationLink: string;
  restaurantLink: string;
  weddingLocationLink: string;
  weddingLocation: string;
  weddingDescription: string;
  weddingMapLink: string;
  title: string;
  subtitle: string;
  inviteCerimony: string;
  inviteReception: string;
  language: string;
}

const Invitation: React.FC<InvitationProps> = ({
  restaurantName,
  restaurantLocation,
  restaurantDescription,
  restaurantMapLink,
  restaurantLocationLink,
  restaurantLink,
  weddingLocationLink,
  weddingLocation,
  weddingDescription,
  weddingMapLink,
  title,
  subtitle,
  inviteCerimony,
  inviteReception,
  language,
}) => {
  const [isOpenCeremony, setIsOpenCeremony] = useState(false);
  const [isOpenMeal, setIsOpenMeal] = useState(false);

  const toggleCeremony = () => {
    setIsOpenCeremony(!isOpenCeremony);
  };

  const toggleMeal = () => {
    setIsOpenMeal(!isOpenMeal);
  };

  return (
    <div className="max-w-2xl mx-2 sm:mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="text-sm font-medium text-gray-700 py-2">{subtitle}</p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div
            className="bg-gray-50 px-4 py-5 sm:grid sm:px-6 cursor-pointer hover:bg-[var(--primary-color)]"
            onClick={toggleCeremony}
          >
            <div className="text-sm text-gray-500 font-bold sm:max-w-xl">
              {inviteCerimony}
              {isOpenCeremony ? (
                <IoIosArrowDropup className="inline mx-4" size={25} />
              ) : (
                <IoIosArrowDropdown className="inline mx-4" size={25} />
              )}
            </div>
          </div>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {isOpenCeremony && (
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      {language === "pt-BR"
                        ? "Local da Cerimônia"
                        : language === "en-US"
                        ? "Wedding Location"
                        : "Local for seremonien"}
                    </dt>
                    <Link href={weddingLocationLink}>
                      <dd className="mt-1 text-sm text-[var(--primary-color-dark)] sm:mt-0 sm:col-span-2">
                        {weddingLocation} <GiClick className="inline" />
                      </dd>
                    </Link>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      {language === "pt-BR"
                        ? "Data do Casamento"
                        : language === "en-US"
                        ? "Wedding Date"
                        : "Bryllupsdato"}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {weddingDescription}
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:px-6">
                    <iframe
                      src={weddingMapLink}
                    ></iframe>
                  </div>
                </dl>
              </div>
            )}
          </div>
          <div
            className="bg-white px-4 py-5 sm:grid sm:px-6 cursor-pointer hover:bg-[var(--primary-color)]"
            onClick={toggleMeal}
          >
            <div className="text-sm text-gray-500 font-bold">
              {inviteReception}
              {isOpenMeal ? (
                <IoIosArrowDropup className="inline mx-4" size={25} />
              ) : (
                <IoIosArrowDropdown className="inline mx-4" size={25} />
              )}
            </div>
          </div>
          <div className="bg-white px-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 cursor-pointer">
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isOpenMeal && (
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        {language === "pt-BR"
                          ? "Nome do Restaurante"
                          : language === "en-US"
                          ? "Restaurant Name"
                          : "Restaurant navn"}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                        {restaurantName}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        {language === "pt-BR"
                          ? "Local do Restaurante"
                          : language === "en-US"
                          ? "Restaurant Location"
                          : "Restaurant beliggenhed"}
                      </dt>
                      <Link href={restaurantLocationLink}>
                        <dd className="mt-1 text-sm text-[var(--primary-color-dark)] sm:mt-0 sm:col-span-1">
                          {restaurantLocation} <GiClick className="inline" />
                        </dd>
                      </Link>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        {language === "pt-BR"
                          ? "Descrição do Restaurante"
                          : language === "en-US"
                          ? "Restaurant Description"
                          : "Restaurant beskrivelse"}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {restaurantDescription}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        {language === "pt-BR"
                          ? "Link do Restaurante"
                          : language === "en-US"
                          ? "Restaurant Link"
                          : "Restaurant Link"}
                      </dt>
                      <Link href={restaurantLink}>
                        <dd className="mt-1 text-sm text-[var(--primary-color-dark)] sm:mt-0 sm:col-span-1">
                          {restaurantName} website{" "}
                          <GiClick className="inline" />
                        </dd>
                      </Link>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <iframe src={restaurantMapLink}></iframe>
                    </div>
                  </dl>
                </div>
              )}
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Invitation;

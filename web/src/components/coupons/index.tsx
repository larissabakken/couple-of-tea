import React, { useState } from "react";
import Image from "next/image";

import Badges from "../badges";

interface Coupon {
  title: string;
  description: string;
  expiry: string;
}

interface CouponsProps {
  coupons: Coupon[];
}

const Coupons: React.FC<CouponsProps> = ({ coupons }) => {
  return (
    <div className="max-w-8xl mx-auto mt-10 px-2">
      <h2 className="text-3xl font-bold mb-6">Coupons</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="border border-[var(--secondary-color-dark)] shadow-lg rounded-lg overflow-hidden"
          >
            <div className="px-4 py-2">
              <div className="text-lg font-bold mb-2 rounded-sm shadow-sm bg-pink-50 py-2 text-gray-700">
                <span className="mx-2">{coupon.title}</span>
                <Badges title="FOOD" color="red" />
              </div>

              <p className="text-sm py-2">
                {coupon.description}
              </p>

              <button className="bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-dark)] text-white font-bold py-1 w-full rounded mt-4">
                Use coupon
              </button>
              <p className="text-sm text-[var(--error)] mx-1">
                {coupon.expiry}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;

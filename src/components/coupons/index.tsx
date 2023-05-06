import React from "react";
import { useApi } from "@/hooks/useApi";
import { useToast } from "@/hooks/useToast";
import { Coupon } from "@/@types/components";
import Badges from "../badges";

export interface CouponsProps {
  coupons: Coupon[];
  onUseCoupon: () => void;
}

const Coupons: React.FC<CouponsProps> = ({ coupons, onUseCoupon }) => {
  const { request, loading } = useApi();
  const showToast = useToast();

  async function handleUse(id: string) {
    try {
      await request(`/coupons/use/${id}`, "get");
      onUseCoupon();
      showToast("Coupon used successfully", { type: "success" });
    } catch (error) {
      console.error(error);
      showToast("Error using coupon", { type: "error" });
    }
  }

  return (
    <div className="max-w-8xl mx-auto mt-10 px-2">
      <h2 className="text-3xl font-bold mb-6">Coupons</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-2">
        {coupons.map((coupon) => {
          const date = new Date(coupon.expiresAt);
          return (
            <div
              key={coupon.id}
              className={`border border-[var(--secondary-color-dark)] shadow-lg rounded-lg overflow-hidden min-w-full flex flex-col justify-between ${
                coupon.redeemed ? "filter grayscale contrast-200" : ""
              } md:w-1/2 lg:w-1/3`}
            >
              <div className="px-4 py-2">
                <div className="text-lg font-bold mb-2 rounded-sm shadow-sm bg-pink-50 py-2 text-gray-700">
                  <span className="mx-2">{coupon.name}</span>
                  <Badges title={coupon.tag} color="red" />
                </div>
                <p className="text-sm py-2">{coupon.description}</p>
              </div>
              <div className="flex flex-col justify-center items-center p-4">
                <button
                  onClick={() => handleUse(coupon.id)}
                  className={`bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-dark)] text-white font-bold py-1 w-full rounded mt-4 ${
                    coupon.redeemed ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={coupon.redeemed}
                >
                  Use coupon
                </button>
                <p className="text-sm text-[var(--error)] mx-1">
                  {date.toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coupons;

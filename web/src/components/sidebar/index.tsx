import { useState } from "react";
import Link from "next/link";
import { RiCoupon3Line, RiHomeHeartLine, RiMenuFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <>
      {/* Barra lateral */}
      <aside className="fixed z-40 top-0 left-0 bg-gray-900 text-white h-full w-56">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">
            <RiMenuFill className="inline mr-2" />
            Menu
          </h2>
          <ul className="text-lg">
            <li className="my-2">
              <Link href="/">
                <p className="hover:text-[var(--primary-color)]">
                  <RiHomeHeartLine className="inline" /> Home
                </p>
              </Link>
            </li>
            <li className="my-2">
              <Link href="/sobre">
                <p className="hover:text-[var(--primary-color)]">
                  <RiCoupon3Line className="inline" /> Coupons
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

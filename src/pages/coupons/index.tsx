import React, { useEffect, useState } from "react";

import { useRequireAuth } from "@/hooks/useRequireAuth";
import { useApi } from "@/hooks/useApi";
import { useToast } from "@/hooks/useToast";

import Header from "@/components/header";
import Footer from "@/components/footer";
import CouponsCard from "@/components/coupons";

export default function Coupons() {
  useRequireAuth();
  const { request, loading } = useApi();
  const showToast = useToast();
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await request(`/coupons`, "get");

      if (error) {
        showToast(`${error.message}`, { type: "error" });
      } else {
        setCoupons(data);
      }
    };
    fetchData();
  }, []);

  const handleUseCoupon = async () => {
    const { data, error } = await request(`/coupons`, "get");

    if (error) {
      showToast(`${error.message}`, { type: "error" });
    } else {
      setCoupons(data);
    }
  };

  return (
    <div>
      <Header />
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <CouponsCard coupons={coupons} onUseCoupon={handleUseCoupon} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: "This is server-side rendered data",
    },
  };
}

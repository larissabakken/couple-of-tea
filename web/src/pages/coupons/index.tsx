import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CouponsCard from "@/components/coupons";

function Coupons() {
  const data = [
    {
      id: 1,
      title: "Cupom 1",
      description: "Descrição do cupom 1",
      expiry: "01/01/2021",
    },
    {
      id: 2,
      title: "Descrição do 2",
      description: "Descrição do cupom 2",
      expiry: "01/01/2021",
    },
    {
      id: 3,
      title: "Cupom 3",
      description: "Descrição do cupom 3",
      expiry: "01/01/2021",
    },
    {
      id: 4,
      title: "Cupom 4",
      description: "Descrição do cupom 3",
      expiry: "01/01/2021",
    },
    {
        id: 5,
        title: "Cupom 5",
        description: "Descrição do cupom 3",
        expiry: "01/01/2021",
      },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <CouponsCard coupons={data} />
      </div>
      <Footer />
    </div>
  );
}

export default Coupons;

import React from "react";
import Sidebar from "@/components/sidebar";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className="ml-56">{/* Coloque o conteúdo da página aqui */}</div>
    </div>
  );
}

import React from 'react'
import Header from "@/components/header";
import Shelf from "@/components/shelf";
import Footer from "@/components/footer";
export default function StoreWishlist() {
  return (
    <div>
      <Header/>
      <div className="h-[95vh] bg-gray-50">
        <Shelf/>
      </div>
     
      <Footer/>
    </div>
    
  )
}
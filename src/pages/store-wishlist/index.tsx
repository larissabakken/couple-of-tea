import React from 'react'
import Header from '@/components/header'
import Shelf from '@/components/shelf'
import Footer from '@/components/footer'
import Pagination from '@/components/pagination'
export default function StoreWishlist() {
  const handlePageChange = (page: number) => {
    console.log(page)
  }
  return (
    <div>
      <Header />
      <div>
        <Shelf />
        <Pagination
          currentPage={3}
          totalPages={5}
          onPageChange={handlePageChange}
        />
      </div>

      <Footer />
    </div>
  )
}

import React from 'react'
import Shelf from '@/components/shelf'
import Pagination from '@/components/pagination'
export default function StoreWishlist() {
  const handlePageChange = (page: number) => {
    console.log(page)
  }
  return (
    <div className="w-full min-h-[90vh]">
      <Shelf />
      <Pagination
        currentPage={3}

        totalPages={5}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

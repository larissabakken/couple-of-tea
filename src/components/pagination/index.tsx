import { FC } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex items-center justify-center space-x-2 pb-10">
      <button
        className={`p-2 rounded-full ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <BsChevronLeft />
      </button>
      <span>{currentPage}</span>
      <button
        className={`p-2 rounded-full ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer'
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <BsChevronRight />
      </button>
    </div>
  )
}

export default Pagination

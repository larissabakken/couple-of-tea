import React, { useState } from 'react'

type ModalProps = {
  isOpen: boolean
  children: React.ReactNode
}

export default function ModalDetails({ isOpen, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 mx-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow">{children}</div>
        </div>
      )}
    </>
  )
}

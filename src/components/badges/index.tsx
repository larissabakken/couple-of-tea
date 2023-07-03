import React from 'react'

interface BadgeProps {
  title: string
  color: string
}

function Badges({ title, color }: BadgeProps) {
  return (
    <div className="inline">
      <span
        className={`inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-600 ring-1 ring-inset ring-${color}-500/10`}
      >
        {title}
      </span>
    </div>
  )
}

export default Badges

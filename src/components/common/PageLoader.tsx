import React from 'react'

export const PageLoader = () => (
  <div className="w-full h-full bg-primary-main absolute top-0 left-0 flex justify-center items-center">
    <span className="relative flex h-5 w-5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light"></span>
      <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
    </span>
  </div>
)

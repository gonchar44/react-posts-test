import React from 'react'
import { LinkEl } from '@common'

export const PostPage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center gap-y-5">
    <div className="text-center">
      <h2 className="text-2xl font-bold">Soon</h2>
      <p className="text-secondary-main text-sm line-clamp-3">
        Page is temporary empty...
      </p>
    </div>
    <LinkEl text="Go back" path="/" />
  </div>
)

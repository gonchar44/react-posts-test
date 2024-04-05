import React, { Suspense } from 'react'
import { PageLoader } from '@common'
import { PostsList } from '@components'

export const BlogPage = () => (
  <>
    <Suspense fallback={<PageLoader />}>
      <PostsList />
    </Suspense>
  </>
)

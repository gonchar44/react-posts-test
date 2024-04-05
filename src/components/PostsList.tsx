import React, { lazy } from 'react'
import { useGetPostsQuery } from '@slices'

const PostCard = lazy(async () => ({
  default: (await import('@components')).PostCard
}))

export const PostsList = () => {
  const { data: posts } = useGetPostsQuery({ limit: 100 })

  return (
    <section className="max-w-screen-xl w-full mx-auto p-5">
      <h2 className="font-bold text-2xl">Posts</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {posts?.map((post) => <PostCard post={post} key={post.id} />)}
      </ul>
    </section>
  )
}

import React, { FC } from 'react'
import { Post } from '@types'
import { LinkEl } from '@common'

interface Props {
  post: Post
}

export const PostCard: FC<Props> = ({ post }) => (
  <li className="bg-primary-light rounded-md overflow-hidden shadow-xl duration-300 hover:scale-105">
    {/*Post image*/}
    <img
      className="w-full h-40"
      src={require('../assets/images/mock-image.webp')}
      alt="post-image"
    />

    {/*Post info*/}
    <div className="p-3 flex flex-col items-start">
      <h3 className="text-lg capitalize font-bold truncate w-full">
        {post.title}
      </h3>
      <p className="text-secondary-main capitalize text-sm line-clamp-3">
        {post.body}
      </p>

      {/*Post bottom*/}
      <div className="w-full flex justify-end mt-5">
        <LinkEl text="Read More" path={`/post/${post.id}`} />
      </div>
    </div>
  </li>
)

import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  text: string
  path: string
}

export const LinkEl: FC<Props> = ({ text, path }) => (
  <Link
    className="border-2 rounded-md border-secondary-transparent px-1 text-sm duration-300 hover:border-primary-main font-bold"
    to={path}
  >
    {text}
  </Link>
)

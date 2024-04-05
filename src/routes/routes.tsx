import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BlogPage, PostPage } from '@pages'

export const RoutesList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="post/:id" element={<PostPage />} />
      <Route path="/" element={<BlogPage />} />
    </Routes>
  </BrowserRouter>
)

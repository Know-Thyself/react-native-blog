import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
  // const blogPosts = [{ title: 'First Blog' }, { title: 'Second Blog' }]
  const [blogPosts, setBlogPosts] = useState([
    { title: 'First Blog' },
    { title: 'Second Blog' },
  ])
  const addBlogPost = newBlogPost => {
    setBlogPosts([...blogPosts, newBlogPost])
  }
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext

import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'First Blog' },
    { id: 2, title: 'Second Blog' },
    { id: 3, title: 'Third Blog' },
  ])

  const addBlogPost = newBlogPost => {
    const blogIds = blogPosts.map(post => post.id)
    const newId = Math.max(...blogIds) + 1
    setBlogPosts([...blogPosts, { ...newBlogPost, id: newId }])
  }

  const deleteBlog = id => {
    const blogs = blogPosts.filter(blog => blog.id !== id)
    setBlogPosts(blogs)
  }

  const editBlog = (newTitle, id) => {
    const allBlogs = [...blogPosts]
    blogPosts.map(blog => (blog.id === id ? (blog.title = newTitle) : blog))
    setBlogPosts(allBlogs)
  }

  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPost, deleteBlog, editBlog }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext

import createDataContext from './createDataContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      const blogIds = state.map(post => post.id)
      const newId = Math.max(...blogIds) + 1
      return [...state, { title: action.payload, id: newId }]
    case 'delete_blogpost':
      const blogs = state.filter(blog => blog.id !== action.payload)
      return blogs
    default:
      break
  }
}
const addBlogPost = dispatch => {
  // dispatch([...blogPosts, { ...newBlogPost, id: newId }])
  return newBlogPost => {
    dispatch({ type: 'add_blogpost', payload: newBlogPost })
  }
}

const deleteBlog = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlog = (newTitle, id) => {
  const allBlogs = [...blogPosts]
  blogPosts.map(blog => (blog.id === id ? (blog.title = newTitle) : blog))
  dispatch(allBlogs)
}

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlog },
  [
    { id: 1, title: 'First Blog' },
    { id: 2, title: 'Second Blog' },
    { id: 3, title: 'Third Blog' },
  ]
)

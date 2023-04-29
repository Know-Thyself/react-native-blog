import createDataContext from './createDataContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      const blogIds = state.map(post => post.id)
      const newId = Math.max(...blogIds) + 1
      return [
        ...state,
        {
          id: newId,
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
    case 'delete_blogpost':
      const blogs = state.filter(blog => blog.id !== action.payload)
      return blogs
    case 'edit_blogpost':
      const allBlogs = [...state]
      allBlogs.map(blog =>
        blog.id === action.payload.id
          ? ((blog.title = action.payload.title),
            (blog.content = action.payload.content))
          : blog
      )
      return allBlogs
    default:
      break
  }
}
const addBlogPost = dispatch => {
  return (newTitle, newContent) => {
    dispatch({
      type: 'add_blogpost',
      payload: { title: newTitle, content: newContent },
    })
  }
}

const deleteBlog = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlog = dispatch => {
  return (id, updatedTitle, updatedContent) => {
    dispatch({
      type: 'edit_blogpost',
      payload: { id: id, title: updatedTitle, content: updatedContent },
    })
  }
}

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlog, editBlog },
  [
    { id: 1, title: 'First Blog', content: 'This is the First Blog' },
    { id: 2, title: 'Second Blog', content: 'This is the Second Blog' },
    { id: 3, title: 'Third Blog', content: 'This is the Third Blog' },
  ]
)

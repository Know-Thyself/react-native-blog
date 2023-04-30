import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const reducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload
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

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('blogposts')
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPost = dispatch => {
  return async (newTitle, newContent, callback) => {
    await jsonServer.post('/blogposts', {
      title: newTitle,
      content: newContent,
    })
    dispatch({
      type: 'add_blogpost',
      payload: { title: newTitle, content: newContent },
    })
    callback()
  }
}

const deleteBlog = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlog = dispatch => {
  return async (id, updatedTitle, updatedContent, callback) => {
    await jsonServer.patch(`/blogposts/${id}`, {
      title: updatedTitle,
      content: updatedContent,
    })
    dispatch({
      type: 'edit_blogpost',
      payload: { id: id, title: updatedTitle, content: updatedContent },
    })
    callback()
  }
}

export const { Context, Provider } = createDataContext(
  reducer,
  { getBlogPosts, addBlogPost, deleteBlog, editBlog },
  []
)

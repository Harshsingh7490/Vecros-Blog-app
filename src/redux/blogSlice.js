import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  postToEdit: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const { id, content } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.content = content;
      }
      state.postToEdit = null;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setPostToEdit: (state, action) => {
      state.postToEdit = state.posts.find(post => post.id === action.payload);
    },
  },
});

export const { addPost, editPost, deletePost, setPostToEdit } = blogSlice.actions;
export default blogSlice.reducer;

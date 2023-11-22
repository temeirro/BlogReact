import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './appSlice/postsSlice';
import  usersReducer from './appSlice/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer 
  },
});
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: '1',
        title: "Learning Redux Toolkit",
        content: "Welcome to the React Redux Quick Start tutorial! This tutorial will briefly introduce you to React Redux and teach you how to start using it correctly.",
        userId: '2',
        reactions: {
            super: 0,
            wow: 0,
            heart: 0,
            angry: 0
        }

    },
    {
        id: '2',
        title: "Learning Slices",
        content: "Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.",
        userId: '1',
        reactions: {
            super: 0,
            wow: 0,
            heart: 0,
            angry: 0
        }
    }
];


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {  //"posts/postAdded"   postAdded()
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content, userId) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        reactions: {
                            super: 0,
                            wow: 0,
                            heart: 0,
                            angry: 0
                        }
                    }
                }
            }
        },
        // postAdded: (state, action) =>{
        //     console.log(action.payload);
        //     state.push(action.payload);
        // }
        reactionAdd: (state, action) => {
            const { postId, reaction } = action.payload;
            const findPost = state.find(post => post.id === postId);
            if (findPost) {
                findPost.reactions[reaction]++;
            }
        },
        postRemove: (state, action) => {
            const index = state.findIndex(post => post.id !== action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
                console.log("deleted");
            }
        },
        postEdit: (state, action) => {
            const { id, title, content, userId } = action.payload
            const existingPost = state.find((post) => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
                existingPost.userId = userId
            }
        }
    }
});

export const { postAdded, reactionAdd, postRemove, postEdit } = postsSlice.actions;
export default postsSlice.reducer;






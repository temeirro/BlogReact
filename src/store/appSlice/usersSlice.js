import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1', name:"Walter Sckot"},
    {id:'2', name:"Kate Midelton"},
    {id:'3', name:"Cherchel"}
];

const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{}
});


export default usersSlice.reducer;


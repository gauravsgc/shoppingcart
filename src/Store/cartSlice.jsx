
import { createSlice } from "@reduxjs/toolkit";
//state
// const initialstate=[];
// //reducer is a function which mutate state//pure function:doesnt change outside data
const cartSlice=createSlice({
    name:'cart',
    initialState: [],
    reducers:{
       add(state,action){
     state.push(action.payload);
    //...directly mutate
},
// remove(){

// }
     }
});
    export const {add,remove} =cartSlice.actions;
    export default cartSlice.reducer;
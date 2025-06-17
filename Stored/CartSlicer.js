import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cartslice',
    initialState: {
        items:[],
        count:0
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push({...action.payload , price: action.payload.defaultPrice || action.payload.price ,quantity:1});
            state.count += 1;
        },
        IncrementItems:(state,action)=>{
            const element = state.items.find(item=> item.id===action.payload.id);
            element.quantity += 1;
            state.count += 1;
        },
        DecrementItems:(state,action)=>{
            const element = state.items.find(item=> item.id===action.payload.id);
            if(element.quantity > 1){
                element.quantity -= 1;
            }
            else{
                state.items = state.items.filter(item => item.id != action.payload.id );                         
            }
            state.count -= 1;
        }
    }
})


export const {addItems , IncrementItems , DecrementItems} = cart.actions;
export default cart.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";


const url = "https://course-api.com/react-useReducer-cart-project"
const  initialState ={
    cartItems: cartItems,
    amount:2,
    total:0,
    isLoading:true
}

export const getCartItems=createAsyncThunk('cartA/getCartItems', ()=>{
    return fetch(url).then((resp)=> resp.json()).catch((err)=> console.log(err));
});

// NOTE
// The find() method is used to find all the descendant elements of the selected element. It finds the element in the DOM tree by traversing through the root to leaf.

// The filter() method is used to filters all the elements and returns the element that matches and the element that do not match are removed.

const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
    clearCart:(state)=>{
        state.cartItems = [];
    },
    removeItem:(state,action)=>{
    // each item has a payload on click
  console.log(action)
  const itemId = action.payload
//   we access the old cartitem id in the state and the current cart item ID 
//   console.log(state)
//   if the ID does not match it not be return, the item will be removed from the cartItem
  state.cartItems = state.cartItems.filter(()=>itemId.id !== itemId)
    },
    increase:(state,{payload})=>{

    // aceess the old id and compare with thenew ID on click which is found in the payload
    const cartItem = state.cartItems.find((item)=>item.id === payload.id)
    console.log(cartItem)
    cartItem.amount = cartItem.amount +1
    },
    decrease:(state,{payload})=>{
        // aceess the old id and compare with thenew ID on click which is found in the payload
        const cartItem = state.cartItems.find((item)=>item.id === payload.id)
        console.log(cartItem)
        cartItem.amount = cartItem.amount - 1
        },
    calculaeTotals:(state)=>{
        let amount=0;
        let total=0;
        // access amount and total property of each item using foreach
        state.cartItems.forEach((item)=>{
            amount += item.amount
            total += item.amount * item.price
        })
        // we reaasing the item amount to the state amount 
        state.amount = amount
        state.total = total 
    }
 },

 extraReducers:{
  [getCartItems.pending]:(state)=>{
    state.isLoading = true
  },
  [getCartItems.fulfilled]:(state,action)=>{
    state.isLoading = false
    state.cartItems = action.payload
  },
  [getCartItems.rejected]:(state,action)=>{
    state.isLoading = false
  },
 }
})

export const {clearCart, removeItem, calculaeTotals, increase, decrease} = cartSlice.actions
console.log(cartSlice)

export default cartSlice.reducer
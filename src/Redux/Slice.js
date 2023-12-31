import { createSlice } from "@reduxjs/toolkit";
import product from '../ProductData.js'

const initialState = ({
    cart: [],
    items:product,
    totalQuantity:0,
    totalPrice:0
})

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCard:(state,action) => {
            
            let find = state.cart.findIndex((element) => element.id === action.payload.id)
            if(find >= 0){
                state.cart[find].quantity += 1;
            }
            else{
                state.cart.push(action.payload)
            }
            
            
        },

        getCartTotal: (state)=> {
            let {totalPrice, totalQuantity} = state.cart.reduce(
                (cartTotal, cartItem) =>{
                    console.log("cartTotal", cartTotal);
                    console.log("cartItem", cartItem);
                    const {price,quantity} = cartItem
                    console.log(price,quantity);
                    const itemTotal = price*quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity +=quantity;
                    return cartTotal
                },
                {
                    totalPrice:0,
                    totalQuantity:0,

                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state,action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        increaseItem: (state,action) => {
            state.cart = state.cart.map((item) => {
                if(item.id ===action.payload){
                    return {...item, quantity: item.quantity +1}
                }
                
                    return item
                
            })
        },
        decreaseItem: (state,action) => {
            state.cart = state.cart.map((item) => {
                if(item.id ===action.payload){
                    return {...item, quantity: item.quantity -1}
                }
                
             return item;
                
            })
        }
    },
})

export const {addToCard, getCartTotal, removeItem, increaseItem, decreaseItem} = cartSlice.actions
export default cartSlice.reducer;
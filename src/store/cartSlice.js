import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0
    },
    reducers: {
        saveInCartAction: (state, action) => {
            // action.payload - novi proizvod koji ulazi u korpu
            // console.log(action.payload);

            let copyCart = [...state.cart];

            // LOGIKA
            // FIND_INDEX === DUPLIKATI
            let findeIndex = null;

            copyCart.find((item,index) => {
                if(item.id === action.payload.id){
                    findeIndex = index;
                    return;
                }
            })

            if(findeIndex === null){
                // PUSH
                copyCart.push({...action.payload, count: 1, cartTotal: action.payload.price})
                state.totalProduct++;
            }else{
                // DODATI COUNT + 1
                copyCart[findeIndex].count++;

            }
            state.cart = copyCart;
            localStorage.setItem('cart_item', JSON.stringify(copyCart));
            localStorage.setItem('cart_total', JSON.stringify(state.totalProduct))
            
        },
        deleteFromCartAction: (state, action) => {
            console.log(action.payload);
        }
    }
})

export const {saveInCartAction,deleteFromCartAction} = cartSlice.actions;
export default cartSlice.reducer;
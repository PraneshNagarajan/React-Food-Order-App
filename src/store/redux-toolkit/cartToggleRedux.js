import {createSlice} from '@reduxjs/toolkit'

const cartToggleSlice = createSlice({
    name: 'CartToggle',
    initialState: {
        cart : {show: false},
        modal: {show: false}
    },
    reducers: {
        cartToggle(state) {
            state.cart.show = !state.cart.show
        },
        modalToggle(state) {
            state.modal.show = !state.modal.show
        }
    }
})

export const CartToggleActions  = cartToggleSlice.actions;
export default cartToggleSlice.reducer;
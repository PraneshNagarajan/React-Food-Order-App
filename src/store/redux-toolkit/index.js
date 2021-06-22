import {configureStore} from '@reduxjs/toolkit'
import CartItemReducer from './CartItemRedux';
import AuthReducer from './loginRedux'

const storeReduxToolkit = configureStore({
    reducer:{
        auth: AuthReducer,
        cartItems: CartItemReducer
    }
})

export default storeReduxToolkit;
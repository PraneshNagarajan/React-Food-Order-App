import {configureStore} from '@reduxjs/toolkit'
import CartItemReducer from './CartItemRedux';
import AuthReducer from './loginRedux'
import NotificationReducer from './NotificationRedux';
import CartToggleReducer from './cartToggleRedux'

const storeReduxToolkit = configureStore({
    reducer:{
        auth: AuthReducer,
        cartItems: CartItemReducer,
        notification: NotificationReducer,
        cartToggle: CartToggleReducer
    }
})

export default storeReduxToolkit;
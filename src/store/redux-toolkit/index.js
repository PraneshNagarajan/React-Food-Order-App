import {configureStore} from '@reduxjs/toolkit'
import CartItemReducer from './CartItemRedux';
import AuthReducer from './loginRedux'
import NotificationReducer from './NotificationRedux';

const storeReduxToolkit = configureStore({
    reducer:{
        auth: AuthReducer,
        cartItems: CartItemReducer,
        notification: NotificationReducer
    }
})

export default storeReduxToolkit;
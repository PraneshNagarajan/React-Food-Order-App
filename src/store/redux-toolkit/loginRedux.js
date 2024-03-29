import {createStore} from 'redux'
import {createSlice} from '@reduxjs/toolkit'

const initialValues = {
    isLogged: false, 
    token: null,
    expires: null
}

  //key - initialValues: value - initialValues
  //          (or)
  //initialValues,  - because key and value has same name

const authSlice = createSlice({
    name: 'Authentication', 
    initialState: initialValues,
    reducers: {
        login(state,action){
            // if(action.payload.username === "sathya" && action.payload.password === "280996@sp") {
            //     // here we can mutate/changing existing state, but actually we aren't change existing state
            //     //redux-toolkit uses another package called 'imgur'. Which detects code like this and which will 
            //     //automatically clone existing state and create new state object, keep all the state which we aren't editing 
            //     //and override the state.
            //     state.isLogged = !state.isLogged 
                
            // }  else {
            //      state.errorMsg =  'Incorrect Username / Password'
            // } 
           
            state.expires = action.payload.expires
            state.isLogged = true
            state.token = action.payload.token
            console.log(state)
        },
        logout(state){
            state.expires = null
            state.isLogged = false
            state.token = null 
        }
    }
})
export const AuthActions = authSlice.actions;
export default authSlice.reducer;
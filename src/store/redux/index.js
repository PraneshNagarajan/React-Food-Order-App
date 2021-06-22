import {createStore} from 'redux'

   
const loginReducer = (state = {isLogged: false, errorMsg: ''},action) => {
    if(action.type === 'login') {
        if(action.payload.username === "sathya" && action.payload.password === "280996@sp") {
            // we copy existing state and override the state and then return new state as object
            return {isLogged : !state.isLogged , errorMsg: ''}
        }  else {
            return {isLogged: state.isLogged, errorMsg: 'Incorrect Username / Password'}
        }
    }
        if(action.type === "logout") {
            return {isLogged: !state.isLogged,  errorMsg: ''}
        }
    return state
}

const storeRedux = createStore(loginReducer)

export default storeRedux
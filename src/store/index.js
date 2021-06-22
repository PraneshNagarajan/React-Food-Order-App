import {createStore} from 'redux'

   
const loginReducer = (state = {isLogged: false, errorMsg: ''},action) => {
    if(action.type === 'login') {
        if(action.payload.username === "sathya" && action.payload.password === "280996@sp") {
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

const store = createStore(loginReducer)

export default store
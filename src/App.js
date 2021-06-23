import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/redux-toolkit/CartItemThunk";
import Notification from "./Components/Notification"
let flag = true
function App() {
const dispatch = useDispatch()
const cartItems  = useSelector(state => state.cartItems)
const changed = useSelector(state => state.cartItems.changed)

useEffect(() => {
dispatch(fetchCartData())
},[])

useEffect(()=>{
  if(flag){
    flag=false;
    return
  }   // prevent from initial call
  if(changed){   // prevent infinity loop fetchcartData() call cartItems would change so, 'changed' get true. 
    dispatch(sendCartData(cartItems))
  }
},[cartItems])

  //Redux
  //-------------
  //const loginStatus = useSelector(state => state.isLogged)

  //redux-toolkit
  //---------------
  const loginStatus = useSelector((state) => state.auth.isLogged);
  return (
    // If you pass dynamic value to components then only <Context.provider>. Otherwise there is no need.
    //-------------------------------------------------------------------------------------------------
    // <ItemsContext.Provider value ={[
    //   {
    //     item: "Sushi",
    //     about: "Finest ish and veggie",
    //     price: 25,
    //     type: 'veg'
    //   },
    //   {
    //     item: "Green Bowl",
    //     about: "Greeny..and..Healthy",
    //     price: 22.15,
    //     type: 'veg'
    //   }]}>
    //   <HomePage/>
    // </ItemsContext.Provider>
    <Fragment>
      <Notification></Notification>
      {!loginStatus && <LoginPage />}
      {loginStatus && <HomePage />}
    </Fragment>
  );
}

export default App;

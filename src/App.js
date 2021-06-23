import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useEffect } from "react";
import useHttp from "./Hooks/http-hook";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Notification from "./Components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { CartItemActions } from "./store/redux-toolkit/CartItemRedux";
//import { fetchCartData, sendCartData } from "./store/redux-toolkit/CartItemThunk";

let flag = true;

function App() {
  const dispatch = useDispatch();
  const http = useHttp();
  const cartItems = useSelector((state) => state.cartItems);
  const changed = useSelector((state) => state.cartItems.changed);

  useEffect(() => {
    //Redux-thunk using 'action-creator' in toolkit
    //---------------------------------------------
    //dispatch(fetchCartData())

    //Redux-thunk using components in toolkit
    //---------------------------------------

    http.request(
      {
        url: "https://react-shop-82e08-default-rtdb.firebaseio.com/cartItems.json",
        method: "GET",
      },
      (data) => {
        dispatch(CartItemActions.replaceItems(data.item || [] ));
      }
    );
  }, []);

  useEffect(() => {
    // prevent from initial call
    if (flag) {
      flag = false;
      return;
    }
    if (changed) {
      // prevent infinity loop fetchcartData() call cartItems would change so, 'changed' get true.
      //Redux-thunk using 'action-creator' in toolkit
      //---------------------------------------------
      //dispatch(sendCartData(cartItems))

      //Redux-thunk using components in toolkit
      //---------------------------------------
      http.request(
        {
          url: "https://react-shop-82e08-default-rtdb.firebaseio.com/cartItems.json",
          method: "PUT",
          body: { item: cartItems.item, total: cartItems.total },
          cart: true,
        },
        () => {}
      );
    }
  }, [cartItems]);

  //_____________________________________________________________________________________
  //Redux
  //-------------
  //const loginStatus = useSelector(state => state.isLogged)

  //redux-toolkit
  //---------------
  const loginStatus = useSelector((state) => state.auth.isLogged);
  //________________________________________________________________________________________

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

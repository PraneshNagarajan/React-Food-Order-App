import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect , lazy, Suspense} from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import useHttp from "./Hooks/http-hook";
import { useDispatch, useSelector } from "react-redux";
import { CartItemActions } from "./store/redux-toolkit/CartItemRedux";
import Layout from "./Components/Layout";
import Spinner from './Components/Spinner'
//import { fetchCartData, sendCartData } from "./store/redux-toolkit/CartItemThunk";


//__________________________________________________________________
//Lazy-loading:
//-------------------------
//lazy-loading increase the performance of application. the component will download when move or visit the page instead download all components.
// so it bundle size will reduce and ramp down download time.
const LoginPage = lazy(() => import("./Pages/LoginPage"))
const HomePage = lazy(() => import("./Pages/HomePage"))
const AboutPage = lazy(() => import("./Pages/HomePage"))

let flag = true;

function App() {
  const location = useLocation();
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
        dispatch(
          CartItemActions.replaceItems({
            item: data.item || [],
            total: data.total,
          })
        );
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

    
<Suspense fallback={<Spinner type="spinner-style-2" />}>
{/* lazy-loading will take some time download untill 'suspense' will manage with some other actions with jsx code. */}

<Switch>
      {/*  Switch excutes one Route on top-down approach.
      (eg)
      ------
      if you want to route 'product page', but '/Product/:1' is match first also it routes to that url instaed of '/product'.
      beacuse '/product' - static, '/:1'- dynamic
                 <Route to="/product/:1"><Component></Route>
                 <Route to="/product" ><Product-Component></Route>
      if u want to avoid:
      --------------------
                1) write dynamic route first - without <Switch>
                2) use prop 'exact' in <Route > with <Switch>

                <Route to="/product/:1" exact ><Component></Route>
                 <Route to="/product" ><Product-Component></Route>
      */}
      <Route path="/" exact>
        <Redirect to="/loginPage"></Redirect>
      </Route>
      <Route path="/loginPage">
        <LoginPage />
      </Route>
      <Layout items={cartItems.item}>
        <Route path="/homePage">
          <HomePage items={cartItems.item} />
        </Route>
        <Route path="/aboutPage">
          <AboutPage items={cartItems.item} />
        </Route>
      </Layout>
    </Switch>
 
</Suspense>
  );
}

export default App;

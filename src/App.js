import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import { Fragment } from "react";
import {useSelector} from "react-redux";

function App() {
  //Redux
  //-------------
  //const loginStatus = useSelector(state => state.isLogged)

  //redux-toolkit
  //---------------
  const loginStatus = useSelector(state => state.auth.isLogged)
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
       {!loginStatus && <LoginPage/>}
        {loginStatus && <HomePage/>}
      </Fragment>
    );
}

export default App;

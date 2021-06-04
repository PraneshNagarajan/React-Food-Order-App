import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage'
import ItemsContext from "./Datas/Items-Context";
function App() {
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


      <div>
        <HomePage/>
      </div>
    );
}

export default App;

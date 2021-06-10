import { useContext, useReducer, useState } from "react";
import { Card } from "react-bootstrap";
import "./HomePage.css";
import mealsImage from "../images/meals.jpg"
import NavBar from "../UI/Header/NavBar";
import DialogModal from "../UI/DiaglogModal/Modal"
import ItemContext from "../Datas/Item-contex";
import MealsInfo from "../UI/Meals/MealsInfo";
import MealsItem from "../UI/Meals/MealsItem";

const defaultCartItems = {
  item: [],
  total: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;
  let updatedItem;
  const index = state.item.findIndex((item) => item.id === action.item.id);
  const exsistingItems = state.item[index];
  if (action.type === "ADD") {
    if (exsistingItems) {
      updatedItem = {
        ...exsistingItems,
        amount: exsistingItems.amount + exsistingItems.price * action.item.size,
        size: exsistingItems.size + action.item.size,
      };
      updatedItems = [...state.item];
      updatedItems[index] = updatedItem;
    } else {
      updatedItems = state.item.concat({
        ...action.item,
        amount: action.item.price * action.item.size,
      });
    }
    // reduce two arguments, `},0`- set intial is zero if initial value is not there
    return {
      item: updatedItems,
      total: updatedItems.reduce((prev, current) => {
        return prev + current.amount;
      }, 0),
    };
  } else if(action.type === "REMOVE"){
    if (exsistingItems.size > 1) {
      updatedItem = {
        ...exsistingItems,
        amount: exsistingItems.amount - exsistingItems.price,
        size: exsistingItems.size - action.item.size,
      };
      updatedItems = [...state.item];
      updatedItems[index] = updatedItem;
    } else {
      updatedItems = state.item.filter((item) => item.id !== action.item.id);
    }
    // reduce two arguments, `},0`- set intial is zero if initial value is not there
    return {
      item: updatedItems,
      total: updatedItems.reduce((prev, current) => {
        return prev + current.amount;
      }, 0),
    };
  } else {
    return(action.item)
  }
};

const HomePage = () => {
  const [isShow, setShow] = useState(false);
  const ItemCxt = useContext(ItemContext);
  const [cartItems, setCartDispatcher] = useReducer(
    cartReducer,
    defaultCartItems
  );

  const onShowModalHandler = () => {
    setShow(!isShow);
  };

  const onAddCartItemsHandler = (item) => {
    setCartDispatcher({ type: "ADD", item: item });
  };

  const onRemoveCartItemsHandler = (item) => {
    setCartDispatcher({ type: "REMOVE", item: item });
  };
 
  const onClearCartItemsHandler = () => {
    setCartDispatcher({ type: "CLEAR", item: defaultCartItems});
  }
  const itemLists = {
    items: ItemCxt.items,
    addCart: onAddCartItemsHandler,
    removeCart: onRemoveCartItemsHandler,
    clearCart: onClearCartItemsHandler
  };

  return (
    <ItemContext.Provider value={itemLists}>
      <NavBar showFunction={onShowModalHandler} items={cartItems.item} />
      <Card>
        <Card.Img src={mealsImage}></Card.Img>
      </Card>
      <MealsInfo />
      <MealsItem />
      <DialogModal
        datas={cartItems}
        show={isShow}
        showFunction={onShowModalHandler}
      />
    </ItemContext.Provider>
  );
};

export default HomePage;

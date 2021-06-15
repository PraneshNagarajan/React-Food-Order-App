import {
  useEffect,
  useReducer,
  useState,
  useContext,
  useCallback,
} from "react";
import { Card, Spinner } from "react-bootstrap";
import "./HomePage.css";
import mealsImage from "../images/meals.jpg";
import NavBar from "../UI/Header/NavBar";
import DialogModal from "../UI/DiaglogModal/Modal";
import ItemContext from "../Datas/Item-contex";
import MealsInfo from "../UI/Meals/MealsInfo";
import MealsItem from "../UI/Meals/MealsItem";
import useHttp from "../Hooks/http-hook";
import { Fragment } from "react";

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
  } else if (action.type === "REMOVE") {
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
    return action.item;
  }
};

const HomePage = () => {
  const [isShow, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const { request: httpRequest, error: httpError, isLoading } = useHttp();

  useEffect(() => {
    httpRequest(
      {
        url: "https://react-shop-82e08-default-rtdb.firebaseio.com/items.json",
        method: "GET",
      },
      getData
    );
  }, []);

  const getData = useCallback((response) => {
    setItems(response);
  });

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
    setCartDispatcher({ type: "CLEAR", item: defaultCartItems });
  };
  const itemLists = {
    items: items,
    addCart: onAddCartItemsHandler,
    removeCart: onRemoveCartItemsHandler,
    clearCart: onClearCartItemsHandler,
  };
  console.log(httpError.length === 0);
  const response =
    httpError.length === 0 ? (
      <Fragment>
        <MealsItem value={itemLists} />
        <DialogModal
          datas={cartItems}
          show={isShow}
          showFunction={onShowModalHandler}
        />
      </Fragment>
    ) : (
      <DialogModal
        datas={{ item: [] }}
        error={httpError}
        show={isShow}
        showFunction={onShowModalHandler}
      />
    );

  return (
    <ItemContext.Provider value={itemLists}>
      <Fragment>
      <NavBar showFunction={onShowModalHandler} items={cartItems.item} />
          <Card>
            <Card.Img src={mealsImage}></Card.Img>
          </Card>
          <MealsInfo />
          {response}
        </Fragment>
    </ItemContext.Provider>
  );
};

export default HomePage;

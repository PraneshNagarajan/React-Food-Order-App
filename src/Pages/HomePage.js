import { Card } from "react-bootstrap";
import "./HomePage.css";
import mealsImage from "../images/meals.jpg";
import MealsInfo from "../UI/Meals/MealsInfo";
import MealsItem from "../UI/Meals/MealsItem";
import DialogModal from "../UI/DiaglogModal/Modal";
import Notification from "../Components/Notification";
import NavBar from "../UI/Header/NavBar";
import { Fragment } from "react";

// const defaultCartItems = {
//   item: [],
//   total: 0,
// };

// const cartReducer = (state, action) => {
//   let updatedItems;
//   let updatedItem;
//   const index = state.item.findIndex((item) => item.id === action.item.id);
//   const exsistingItems = state.item[index];
//   if (action.type === "ADD") {
//     if (exsistingItems) {
//       updatedItem = {
//         ...exsistingItems,
//         amount: exsistingItems.amount + exsistingItems.price * action.item.size,
//         size: exsistingItems.size + action.item.size,
//       };
//       updatedItems = [...state.item];
//       updatedItems[index] = updatedItem;
//     } else {
//       updatedItems = state.item.concat({
//         ...action.item,
//         amount: action.item.price * action.item.size,
//       });
//     }
//     // reduce two arguments, `},0`- set intial is zero if initial value is not there
//     return {
//       item: updatedItems,
//       total: updatedItems.reduce((prev, current) => {
//         return prev + current.amount;
//       }, 0),
//     };
//   } else if (action.type === "REMOVE") {
//     if (exsistingItems.size > 1) {
//       updatedItem = {
//         ...exsistingItems,
//         amount: exsistingItems.amount - exsistingItems.price,
//         size: exsistingItems.size - action.item.size,
//       };
//       updatedItems = [...state.item];
//       updatedItems[index] = updatedItem;
//     } else {
//       updatedItems = state.item.filter((item) => item.id !== action.item.id);
//     }
//     // reduce two arguments, `},0`- set intial is zero if initial value is not there
//     return {
//       item: updatedItems,
//       total: updatedItems.reduce((prev, current) => {
//         return prev + current.amount;
//       }, 0),
//     };
//   } else {
//     return action.item;
//   }
// };

const HomePage = (props) => {
  return (
    <Fragment>
      <Notification />
      <NavBar items={props.items} />
      <DialogModal />
      <Card>
        <Card.Img src={mealsImage}></Card.Img>
      </Card>
      <MealsInfo />
      <MealsItem />
    </Fragment>
  );
};

export default HomePage;

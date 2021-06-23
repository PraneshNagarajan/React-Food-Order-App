import useHttp from "../../Hooks/http-hook";
import { CartItemActions } from "./CartItemRedux";
import { NotificationActions } from "./NotificationRedux";
import axios from "axios";

//Thunk - function that delays function until something else finished
//we can write 'action creator' thunk 'return dispatch function' instead of 'action object - {type: 'add', payload:''}'
export const fetchCartData = () => {
  return (dispatch) => {
    axios({
      url: "https://react-shop-82e08-default-rtdb.firebaseio.com/cartItems.json",
      method: "GET",
    }).then((response) => {
      dispatch(CartItemActions.replaceItems(response.data));
    });
  };
};

export const sendCartData = (data) => {
  return (dispatch) => {
    dispatch(
      NotificationActions.fetchNotifications({
        status: "Sending",
        flag: true,
        bg: "info",
      })
    );
    axios({
      url: "https://react-shop-82e08-default-rtdb.firebaseio.com/cartItems.json",
      method: "put",
      data: { item: data.item, total: data.total },
    })
      .then((response) => {
        dispatch(
          NotificationActions.fetchNotifications({
            status: "Success",
            flag: true,
            bg: "success",
          })
        );
        setTimeout(() => {
          dispatch(NotificationActions.fetchNotifications({ flag: false }));
        }, 1000);
      })
      .catch((error) => {
        dispatch(
          NotificationActions.fetchNotifications({
            status: "Failed",
            error: error.response.data.error,
            bg: "danger",
            flag: true,
          })
        );
      });
  };
};

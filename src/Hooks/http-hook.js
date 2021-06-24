import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { NotificationActions } from "../store/redux-toolkit/NotificationRedux";

const useHttp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState([]);

  const request = (requestConfig, fetchData) => {
    if (requestConfig.cart) {
      dispatch(
        NotificationActions.fetchNotifications({
          status: "Sending",
          flag: true,
          bg: "info",
        })
      );
    }
    setError([]);
    setTimeout(() => {
      axios({
        url: requestConfig.url,
        method: requestConfig.method,
        data: requestConfig.body ? requestConfig.body : null,
      })
        .then((response) => {
          fetchData(response.data);
          if (requestConfig.cart) {
            dispatch(
              NotificationActions.fetchNotifications({
                status: "Success",
                flag: true,
                bg: "success",
              })
            );
            setTimeout(() => {
              dispatch(NotificationActions.fetchNotifications({ flag: false }));
            }, 300);
          }
        })
        .catch((error) => {
          setError(error.message);
          if (requestConfig.cart) {
            dispatch(
              NotificationActions.fetchNotifications({
                status: "Failed",
                error: error.message,
                bg: "danger",
                flag: true,
              })
            );
          }
        });
    }, 3000);
  };

  return {
    request,
    error,
  };
};
export default useHttp;

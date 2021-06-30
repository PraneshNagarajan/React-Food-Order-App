import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { NotificationActions } from "../store/redux-toolkit/NotificationRedux";

const useHttp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState([]);
  const [response, setResponse] = useState([])

  const request = (requestConfig, fetchResponse, fetchError) => {
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
          fetchResponse(response.data);
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
        }).catch((error) => {
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
          if(error.response) {
            fetchResponse(error.response.data.error.code+" : "+ error.response.data.error.message)
            setError(error.response.data.error.code+" : "+ error.response.data.error.message)
          }
          
        });
    }, 3000);
  };

  return {
    request,
    error,
    response
  };
};
export default useHttp;

import { useState } from "react";
import axios from "axios";

const useHttp = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState([]);

  const request = (requestConfig, fetchData) => {
    setError([]);
    let data = [];
    setTimeout(() => {
      axios({
        url: requestConfig.url,
        method: requestConfig.method,
        data: requestConfig.body ? requestConfig.body : null,
      })
        .then((response) => {
          setResponse(response);
          if (requestConfig.method === "GET") {
            if ([response.data].length > 0 ){
              for (let item in response.data) {
                data.push(response.data[item]);
              }
            }
          }
          fetchData(data);
        })
        .catch((error) => {
          setResponse(error);
          setError(error.response.data.error);
        });
    }, 3000);
  };

  return {
    request,
    error,
  };
};
export default useHttp;

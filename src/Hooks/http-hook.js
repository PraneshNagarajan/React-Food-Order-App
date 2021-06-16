import { useState } from "react";
import axios from 'axios'

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState([]);

  const request = (requestConfig, fetchData) => {
    console.log('http')
    setError([])
    let data = [];
    setTimeout(()=> {
      axios({url :requestConfig.url,
        method: requestConfig.method,
        headers: requestConfig.headers ? { 'content-type': 'application/json'} : {},
        data: requestConfig.body ? requestConfig.body : null,
      }) 
        .then((response) => {
          for (let item in response.data) {
            data.push(response.data[item]);
          }
          fetchData(data);
        })
        .catch((error) => {
          setError(error.response.status+" : "+error.response.statusText);
        });
    },3000)
      setIsLoading(false)
  };

  return {
    request,
    isLoading,
    error,
  };
};
export default useHttp;

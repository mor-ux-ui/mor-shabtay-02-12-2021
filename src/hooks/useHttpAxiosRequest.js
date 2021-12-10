import { useState, useEffect } from "react"
import axios from "axios"



export const useHttpAxiosRequest = (RequestConfig) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState(false);
    const [loading, setloading] = useState(true);

    const fetchData = async (params) => {
      try {
       const result = await axios.request(params);
       setResponse(result.data);
       } catch( error ) {
         setError(error);
       } finally {
        setloading(false);
       }
    };
    useEffect(() => {
      if(RequestConfig.fetchData)
        fetchData(RequestConfig);
        else{
          setloading(false);
        }
    },[RequestConfig]);

    return { response, error, loading , fetchData};
};
import { useState, useEffect } from "react";
import httpClient from "../api/httpClient";

const useFetchData = (endpoint) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const getData = async () => {
      try {
        const { data } = await httpClient.get(endpoint);
        setData(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);
    
    return { loading, error, data };
}
export default useFetchData;

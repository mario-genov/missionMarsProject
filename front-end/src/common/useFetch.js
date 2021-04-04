import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => {
      if (res.ok === false) {
        throw new Error('The data for this resource could not be fetched!');
      }
      return res.json();
    })
    .then(data => {
      // console.log("Server response: \n", data);
      setData(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err => {
      // console.log("Error from server: \n", err.message);
      setIsPending(false);
      setError(err.message);
    });
  }, [url]);

  return { data, isPending, error };
}
 
export default useFetch;
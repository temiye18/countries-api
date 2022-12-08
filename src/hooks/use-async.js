import { useState, useCallback } from "react";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const fetchCountries = useCallback(async (url, endpoint = "all") => {
    try {
      const resp = await fetch(`${url}/${endpoint}`);
      if (!resp.ok) {
        const msg = `There was an error: ${resp.status} ${resp.statusText}`;
        throw new Error(msg);
      }
      const data = await resp.json();
      const country = data.slice(0, 20);
      // console.log(country);
      setCountries(country);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // setIsError(true);
      console.log(error.message);
    }
  }, []);

  return { isLoading, countries, fetchCountries };
};

export default useHttp;

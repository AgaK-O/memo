import { useEffect, useState } from "react";

// export const useFetchData = (initUrl: string, initData: []) => {
export const useFetchData = (url: string, initData: [] = []) => {
//   const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err: any) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

//   return [{ data, isLoading, error }, setUrl];
  return { data, isLoading, error };
};

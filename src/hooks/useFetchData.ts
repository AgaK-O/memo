import { useEffect, useState } from "react";


export const useFetchData = (url: string, trigger?: number) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch {
        setError('An error occured while fetching your cats.');
      }

      setIsLoading(false);
    };
    fetchData();
  }, [trigger, url]);

  return { data, isLoading, error };
};

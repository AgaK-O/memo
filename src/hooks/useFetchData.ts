import { useEffect, useState } from "react";
import { CardType } from "../components/types/types";

export const useFetchData = (url: string, trigger?: number) => {
  const [data, setData] = useState([]);
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
  }, [trigger]);

  return { data, isLoading, error };
};

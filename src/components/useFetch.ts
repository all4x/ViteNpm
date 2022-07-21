import axios from "axios";
import { useState, useEffect } from "react";
import { CatImage } from "../../src/components/catgenerator";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);
  return { data };
}

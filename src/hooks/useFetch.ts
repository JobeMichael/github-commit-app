import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: BodyInit;
}

function useFetch<T>(url: string, options: RequestOptions = {}): FetchState<T> {
  const [data, setData] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: options.method || "GET",
          headers: options.headers || {},
          body: options.body || undefined,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const responseData = await response.json();

        setData({
          data: responseData,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData({
          data: null,
          loading: false,
          error: error as Error,
        });
      }
    };

    fetchData();
  }, [url]);

  return data;
}

export default useFetch;

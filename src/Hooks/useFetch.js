import React, { useEffect, useState } from "react";

export default function useFetch(url, dependency) {
  const controller = new AbortController();
  const signal = controller.signal;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // const timer = setTimeout(() => {
    FetchData();
    //   alert("Loading");
    // }, 2000);
    // return () => clearTimeout(timer);

    return () => {
      controller.abort();
      console.log("Aborted");
    };
  }, [dependency, url]);

  const FetchData = async () => {
    try {
      const res = await fetch(url, { signal });
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error };
}

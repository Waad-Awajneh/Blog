import React, { useEffect, useState } from "react";

export default function useFetch(url, method = "GET") {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // const timer = setTimeout(() => {
    FetchData();
    //   alert("Loading");
    // }, 2000);
    // return () => clearTimeout(timer);
  }, []);

  const FetchData = async () => {
    try {
      const res = await fetch(url, { method: method });
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

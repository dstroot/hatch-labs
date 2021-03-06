import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Async get data via API
  const getData = async () => {
    try {
      // get data
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_API_KEY
        }
      });

      // process response
      if (res.ok) {
        const json = await res.json();
        setData(json.records);
      } else {
        setError(new Error(res.status + " " + res.statusText));
      }
    } catch (err) {
      setError(
        new Error(
          "The events API did not return any data. Check your privacy tools (such as Privacy Badger) and ad blockers (such as uBlock Origin)."
        )
      );
    }
  };

  useEffect(() => {
    getData();
  }, [url]); // empty array (run once only), or URL to re-run when url changes

  return [data, error];
};

export { useFetch };

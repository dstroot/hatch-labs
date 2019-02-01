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

  // pass empty array to useEffect so we only
  // process once when mounting the component.
  useEffect(() => {
    getData();
  }, []); // empty array

  return { error, data };
};

export { useFetch };

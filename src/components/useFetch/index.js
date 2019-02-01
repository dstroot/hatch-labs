import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Async get data via API
  const getData = async () => {
    try {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_API_KEY
        }
      });
      const json = await res.json();
      setData(json.records);
    } catch (err) {
      setError(
        "The events API did not return any data. Check your privacy tools (such as Privacy Badger) and ad blockers (such as uBlock Origin)."
      );
    }
  };

  useEffect(() => {
    getData();
  }, []); // pass empty array so we only process once when mounting the component.

  return { error, data };
};

export { useFetch };

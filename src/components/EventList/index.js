import React, { useState, useEffect } from "react";
import EventItem from "../EventItem";

const EventList = ({ url }) => {
  // state
  const [data, setData] = useState();
  const [error, setError] = useState("");

  // get data via API
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
      setError(err);
    }
  };

  useEffect(() => {
    getData();
  }, []); // pass empty array - so we only process once when mounting the component.

  const Error = () => <p className="lead text-danger">{error}</p>;

  const Loading = () => (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const Results = ({ data }) => {
    console.log(data);
    return (
      <>
        <h1 className="display-4 mb-4 mt-4">Upcoming Events</h1>
        <ul className="list-unstyled">
          {data.map(item => (
            <EventItem key={item.id} {...item.fields} />
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      {error && <Error />}
      {!data ? <Loading /> : <Results data={data} />}
    </>
  );
};

export default EventList;

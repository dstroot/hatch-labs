import React from "react";
import EventItem from "../EventItem";
import { useFetch } from "../useFetch";

const EventList = ({ url }) => {
  // fetch our API data
  const { data, error } = useFetch(url);

  // Error state
  const Error = () => <p className="lead text-danger">{error.message}</p>;

  // Loading state
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

  // Results state
  const Results = ({ data }) => {
    return (
      <ul className="list-unstyled">
        {data.map(item => (
          <EventItem key={item.id} {...item.fields} />
        ))}
      </ul>
    );
  };

  // Render
  if (error) return <Error />;
  if (data) {
    return <Results data={data} />;
  } else {
    return <Loading />;
  }
};

export default EventList;

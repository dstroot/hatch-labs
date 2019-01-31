import React, { useState, useEffect } from "react";

// https://jasonsalzman.github.io/react-add-to-calendar/
import AddToCalendar from "react-add-to-calendar";
import "react-add-to-calendar/dist/react-add-to-calendar.css";

// we will render one "item" for each calendar record we recieve from
// our API
const Item = ({
  name,
  description,
  date,
  start,
  end,
  address1,
  address2,
  city,
  state,
  zip,
  latitude,
  longitude,
  imageURL
}) => {
  let event = {
    title: name,
    description: description,
    location: address1,
    startTime: start,
    endTime: end
  };

  let items = [
    { outlook: "Microsoft" },
    { apple: "Apple" },
    { google: "Google" }
  ];

  let icon = { "calendar-plus-o": "left" };

  return (
    <li className="media mt-4">
      <img
        className="mr-3 d-none d-sm-block"
        src={imageURL[0].url}
        alt="event"
      />
      <div className="media-body align-self-center">
        <div className="row">
          <div className="col-md-8">
            <h4 className="mt-0 mb-1">{name}</h4>
            <p className="text-muted small mb-2">
              {new Date(date).toDateString()}{" "}
              {new Date(start).toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true,
                minute: "numeric"
              })}{" "}
              {"- "}
              {new Date(end).toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true,
                minute: "numeric"
              })}
            </p>
          </div>
          <div className="col-md-4">
            <AddToCalendar
              event={event}
              listItems={items}
              buttonTemplate={icon}
              buttonClassClosed="btn btn-primary dropdown-toggle"
              buttonClassOpen="btn btn-primary dropdown-toggle pl-1"
              buttonLabel=" > My Calendar"
              buttonWrapperClass="dropdown mb-3"
            />
          </div>
        </div>
        <p className="">{description}</p>
        <address className="small text-muted">
          {address1}, {address2}
          <br />
          {city}, {state} {zip}
        </address>
      </div>
    </li>
  );
};

// render list from JSON response to URL
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

  const Results = ({ data }) => (
    <>
      <h1 className="display-4 mb-4 mt-4">Upcoming Events</h1>
      <ul className="list-unstyled">
        {data.map(item => (
          <Item key={item.id} {...item.fields} />
        ))}
      </ul>
    </>
  );

  return (
    <>
      {error && <Error />}
      {!data ? <Loading /> : <Results data={data} />}
    </>
  );
};

export default EventList;

import React from "react";
import "./styles.scss";

// https://jasonsalzman.github.io/react-add-to-calendar/
import AddToCalendar from "react-add-to-calendar";
import "react-add-to-calendar/dist/react-add-to-calendar.css";

// we will render one "item" for each calendar record we recieve from
// our API
const EventItem = ({
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
        width="200px"
        height="225px"
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
              buttonClassOpen="btn btn-primary dropdown-toggle"
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

export default EventItem;

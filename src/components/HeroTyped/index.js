import React from "react";
import Typed from "react-typed";

const HeroTyped = ({ image, tagline, typed, strings }) => {
  const hero = {
    /* Image */
    backgroundImage: `url(${image})`,

    /* Set height and width */
    width: "100vw",
    height: "100vh",

    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",

    /* create a shadow around the outside edge */
    boxShadow: "inset 0 0 10rem rgba(0, 0, 0, 1)"
  };

  // place the text on the hero image - center text, viewport wide
  const textSection = {
    textAlign: "center",
    position: "absolute",
    bottom: "25vh",
    width: "100vw",
    color: "white"
  };

  const textBig = {
    fontSize: `calc(52px + 1.5vw + 0.5vmin)`,
    marginBottom: "0",
    fontWeight: "500"
  };

  const textSmall = {
    marginTop: "-0.5vw",
    marginBottom: "0",
    fontSize: `calc(18px + 1.5vw + 0.5vmin)`,
    fontWeight: "300"
  };

  return (
    <div style={hero}>
      <div style={textSection}>
        <p style={textBig}>{tagline}</p>
        <p style={textSmall}>
          {typed}{" "}
          <Typed
            className="text-primary"
            strings={strings}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p>
        <a
          href="/"
          className="btn btn-lg btn-outline-primary mt-4"
          // onClick={ga(
          //   "send",
          //   "event",
          //   "Jumbotron actions",
          //   "Get started",
          //   "Get started"
          // )}
        >
          Get started!
        </a>
      </div>
    </div>
  );
};

export default HeroTyped;

import React from "react";
import PropTypes from "prop-types";

const TextHero = ({ heading, text, link }) => {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-8">
        <div className="text-center mx-auto">
          <h1 className="display-4">{heading || ""}</h1>
          <p className="lead">{text || ""}</p>
          <a href={link} target="_self" className="btn btn-primary">
            Make with Us
          </a>
        </div>
      </div>
    </div>
  );
};

TextHero.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
};

export default TextHero;

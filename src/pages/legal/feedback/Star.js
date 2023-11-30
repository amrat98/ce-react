import React from "react";
import PropTypes from "prop-types";

const Star = ({ selected, onClick }) => {
  console.log(selected);
  return (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", color: selected ? "#FFB000" : "#D9D9D9" }}
    >
      ★
    </span>
  );
};

Star.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Star;

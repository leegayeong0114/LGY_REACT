import React from "react";
import PropTypes from "prop-types";

function Food({name, rating, img}) {
  return (
    <div>
      <h3>like {name} ({rating} / 5.0)</h3>
      <img src={img} alt={name}></img>
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
export default Food;
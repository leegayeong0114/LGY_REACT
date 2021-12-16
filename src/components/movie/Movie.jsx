import React from "react";
import PropTypes from 'prop-types';
import '../../css/movie.css'

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__title">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="movie__genres">
                {genres}
              </li>
            )
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 100)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  // id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
import React from "react";
import PropTypes from 'prop-types';
import '../../css/movie.css'
import { Card , Button } from 'react-bootstrap';
import styled from "styled-components";

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
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top"/>
    //   <img src={poster} alt={title}></img>
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>
    //       {summary.slice(0, 100)}...
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>    
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
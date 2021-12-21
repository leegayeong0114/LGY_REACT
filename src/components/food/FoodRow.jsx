import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {AiTwotoneLike} from 'react-icons/ai';

function FoodRow({idx, name, rating, imageUrl, likeCount, handleClickLike}) {

  return (
    <div className="w-80">
      <span>{name} ({rating} / 5.0)</span>
      <AiTwotoneLike  
        size="30"
        color="red"
        onClick = {() => handleClickLike(idx)}
        >
      </AiTwotoneLike>
      {likeCount}
      <Img src={imageUrl} alt={name}></Img>
    </div>

  );
}

FoodRow.prototype = {
  idx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const Img = styled.img`
  max-width: 80%;
`;

export default FoodRow;
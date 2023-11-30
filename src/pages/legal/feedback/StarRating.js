import React, { useState } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

const StarRating = ({ totalStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
    onRatingChange(starIndex + 1);
  };

  return (
    <div className='Rating-Box'>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  totalStars: PropTypes.number.isRequired,
  initialRating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default StarRating;
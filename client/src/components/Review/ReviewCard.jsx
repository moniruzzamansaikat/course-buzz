import React from 'react';
import './ReviewCard.css';

function ReviewCard({ name, review }) {
  return (
    <div className="review-card">
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  );
}

export default ReviewCard;

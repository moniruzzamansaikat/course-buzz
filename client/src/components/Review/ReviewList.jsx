import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewList.css';

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h1>Reviews</h1>
      <div className="content">
        {reviews.length === 0 && (
          <div>
            <h2>No reviews yet.</h2>
            <p>Be the first to write a review.</p>
          </div>
        )}

        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review.text}
            name={review?.user?.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewList;

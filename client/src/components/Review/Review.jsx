import React, { useEffect, useState } from 'react';
import './Review.css';
import ReviewList from './ReviewList';
import AddReview from './AddReview';
import { fetchReviewsByVideoId } from '../../adapter/videosAdapter';
import { useLocalStorage } from '../../hooks/useLocalstorage';

function Review({ videoId }) {
  const [reviews, setReviews] = useState([]);
  const [token] = useLocalStorage('token');

  useEffect(() => {
    fetchReviewsByVideoId(token, videoId).then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <div className="review">
      <div className="container">
        <ReviewList reviews={reviews} />
        <AddReview videoId={videoId} />
      </div>
    </div>
  );
}

export default Review;

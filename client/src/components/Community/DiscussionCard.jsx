import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './DiscussionCard.css';

function DiscussionCard({ discussion }) {
  const { _id, category, text, replies, createdAt } = discussion;

  return (
    <div className="discussion-card">
      <p className="category">
        <Link to={`/courses/learn-${category}`}>#{category}</Link>
      </p>
      <div className="content">
        <p>{text}</p>
        <p className="time">{moment(createdAt).fromNow()}</p>
        <div className="action">
          <Link to={`/community/${_id}`}>{replies.length} replies..</Link>
          <Link to={`/community/${_id}`}>Reply</Link>
        </div>
      </div>
    </div>
  );
}

export default DiscussionCard;

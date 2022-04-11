import React from 'react';
import moment from 'moment';
import './RepliesCard.css';

function RepliesCard({ reply }) {
  console.log(reply);

  return (
    <div className="replies-card">
      <h3 className="user-name">{reply?.user?.name}</h3>
      <p className="reply">{reply.text}</p>
      <small className="time">{moment(reply.createdAt).fromNow()}</small>
    </div>
  );
}

export default RepliesCard;

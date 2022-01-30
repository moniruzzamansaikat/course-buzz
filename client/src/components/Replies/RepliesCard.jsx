import React from 'react';
import './RepliesCard.css';

function RepliesCard({ reply }) {
  return (
    <div className="replies-card">
      <p>{reply.text}</p>
      <p className="user-name">{reply?.user?.name}</p>
    </div>
  );
}

export default RepliesCard;

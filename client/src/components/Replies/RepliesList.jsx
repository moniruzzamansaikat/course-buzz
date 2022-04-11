import React from 'react';
import RepliesCard from './RepliesCard';
import './RepliesList.css';

function RepliesList({ replies }) {
  return (
    <div className="replies-list">
      <h3>Replies</h3>

      {replies.map((reply, index) => (
        <RepliesCard key={index} reply={reply} />
      ))}
    </div>
  );
}

export default RepliesList;

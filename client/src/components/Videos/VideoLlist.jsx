import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import './VideoList.css';

function VideoLlist({ videos }) {
  return (
    <div className="video-list">
      {videos.length === 0 && (
        <h2>
          Not videos, try to <Link to="/add-video">add one</Link>
        </h2>
      )}

      {videos.map((video, index) => (
        <VideoCard video={video} key={index} />
      ))}
    </div>
  );
}

export default VideoLlist;

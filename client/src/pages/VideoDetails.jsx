import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useVideo } from '../hooks/videos/useVideo';
import { get_youtube_thumbnail } from '../utils/utils.js';
import { useAuth } from '../hooks/auth/useAuth';
import Review from '../components/Review/Review';
import './styles/VideoDetails.css';

function VideoDetails() {
  const { id } = useParams();
  const { getVideoById } = useVideo();
  const { user } = useAuth();
  const video = getVideoById(id);

  if (!video) {
    return null;
  }

  const image = get_youtube_thumbnail(video.url);

  return (
    <div className="page video-details">
      <div className="container">
        <div className="video-desc">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <h1>{video?.name}</h1>
            <p>
              Added by <strong>{video?.user?.name} </strong>
              in
              <strong>
                <Link to={`/courses/learn-${video?.category}`}>
                  {video.category}
                </Link>
              </strong>{' '}
              category
            </p>

            <p>
              <a href="#reviews"> {video?.reviews?.length || 0} Reviews</a>
            </p>
            <br />
            <a href="#add-review" className="btn">
              <img src="/img/pen.svg" alt="" />
              <span>Write a Review</span>
            </a>
            <a
              href={video.url}
              target={'_blank'}
              className="btn"
              rel="noreferrer noopener"
            >
              <img src="/img/youtube.svg" alt="" />{' '}
              <span>Watch on YouTube</span>
            </a>
          </div>
        </div>

        <Review videoId={id} />
      </div>
    </div>
  );
}

export default VideoDetails;

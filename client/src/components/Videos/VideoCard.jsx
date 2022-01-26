import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalstorage';
import { useVideo } from '../../hooks/videos/useVideo';
import { useAuth } from '../../hooks/auth/useAuth';
import { deleteVideoById } from '../../adapter/videosAdapter';
import { Link } from 'react-router-dom';
import { get_youtube_thumbnail } from '../../utils/utils';
import './VideoCard.css';

function VideoCard({ video }) {
  const [token] = useLocalStorage('token');
  const { user, removeMyVideo } = useAuth();
  const { setPlayingVideo, removeVideoById } = useVideo();
  const ownVideo = user && user._id === video?.user;

  const handleDelete = () => {
    deleteVideoById(token, video._id).then((id) => {
      removeVideoById(id);
      removeMyVideo(id);
    });
  };

  return (
    <div className="video-card" data-aos="fade-in">
      <div className="course-img">
        <img
          src={get_youtube_thumbnail(video?.url)}
          className="course-img"
          alt=""
        />
      </div>

      {/* remove  course | video */}
      {ownVideo && (
        <img
          src="/img/remove.svg"
          alt=""
          onClick={handleDelete}
          className="remove"
        />
      )}

      <div className="content">
        <img
          className="play-btn"
          src="/img/play-button.svg"
          alt=""
          onClick={() => {
            setPlayingVideo(video);
          }}
        />
        <Link to={`/videos/${video?._id}`}>
          <span>{video?.name}</span>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;

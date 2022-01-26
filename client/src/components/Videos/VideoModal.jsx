import React from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { useVideo } from '../../hooks/videos/useVideo';
import './VideoModal.css';

// get video id from youtube url
function yotubeVideoId(url) {
  url = url?.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

function VideoModal() {
  const { playingVideo: video, setPlayingVideo } = useVideo();

  return (
    <div className="video-modal">
      <Modal
        isOpen={Boolean(video)}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button className="cross-button" onClick={() => setPlayingVideo(null)}>
          <img src="/img/cross.svg" alt="" />
        </button>

        <div>
          <YouTube
            opts={{
              width: '350px',
              height: '200px',
            }}
            videoId={yotubeVideoId(video?.url)}
          />
        </div>
      </Modal>
    </div>
  );
}

export default VideoModal;

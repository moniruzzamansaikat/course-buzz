import { createContext, useEffect, useState } from 'react';
import VideoModal from '../components/Videos/VideoModal';
import { useLocalStorage } from '../hooks/useLocalstorage';
import { fetchAllVideos } from '../adapter/videosAdapter';

export const VideoContext = createContext();

function VideoProvider({ children }) {
  const [playingVideo, setPlayingVideo] = useState();
  const [token] = useLocalStorage('token', '');
  const [videos, setVideos] = useState([]);

  // fetch videos
  useEffect(() => {
    if (token) {
      fetchAllVideos(token).then((data) => {
        if (data) {
          setVideos(data);
        }
      });
    }
  }, [token]);

  // add video
  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  // remove course by id
  const removeVideoById = (courseId) => {
    const newVideos = videos.filter((video) => video._id !== courseId);
    setVideos(newVideos);
  };

  //   get vidoes by category
  const getVideosByCategory = (category) => {
    return videos.filter((video) => video.category === category);
  };

  // get video by id
  const getVideoById = (id) => {
    return videos.find((video) => video._id === id);
  };

  // add reivew to video
  const addReviewToVideoById = (videoId, review) => {
    const newVideos = videos.map((video) => {
      if (video._id === videoId) {
        video.reviews.push(review);
      }
      return video;
    });
    setVideos(newVideos);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        addVideo,
        addReviewToVideoById,
        getVideoById,
        removeVideoById,
        playingVideo,
        setPlayingVideo,
        getVideosByCategory,
      }}
    >
      {playingVideo ? <VideoModal /> : null}
      {children}
    </VideoContext.Provider>
  );
}

export default VideoProvider;

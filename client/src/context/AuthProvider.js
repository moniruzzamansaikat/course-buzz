import { createContext, useEffect, useState } from 'react';
import { isLoggedIn } from '../adapter/authAdapter';
import { fetchVideosByUserId } from '../adapter/videosAdapter';
import { useLocalStorage } from '../hooks/useLocalstorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [myVideos, setMyVideos] = useState([]);
  const [token] = useLocalStorage('token', '');
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    if (token) {
      isLoggedIn(token).then((data) => {
        if (data?.user) {
          setUser(data.user);
        }
      });
    }
  }, [token]);

  // when user changed we need to update the videos
  useEffect(() => {
    if (user && token) {
      fetchVideosByUserId(token, user._id).then((videos) => {
        setMyVideos(videos);
      });
    }
  }, [user, token]);

  const addMyVideo = (video) => {
    setMyVideos([...myVideos, video]);
  };

  const removeMyVideo = (videoId) => {
    const newMyVideos = myVideos.filter((video) => video._id !== videoId);
    setMyVideos(newMyVideos);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        formSubmitting,
        setFormSubmitting,
        myVideos,
        addMyVideo,
        removeMyVideo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

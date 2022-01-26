import React from 'react';
import VideoLlist from '../components/Videos/VideoLlist';
import { useAuth } from '../hooks/auth/useAuth';

function Profile() {
  const { user, myVideos } = useAuth();

  return (
    <div className="page">
      <div className="container">
        <h2>Hi {user?.name?.split(' ')[0]}, vidoes added by you 👇🏼</h2>
        <VideoLlist videos={myVideos} />
      </div>
    </div>
  );
}

export default Profile;

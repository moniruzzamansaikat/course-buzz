import React from 'react';
import ProfileCard from '../components/Profile/ProfileCard';
import VideoLlist from '../components/Videos/VideoLlist';
import { useAuth } from '../hooks/auth/useAuth';

function Profile() {
  const { user, myVideos } = useAuth();

  return (
    <div className="page">
      <ProfileCard />
      <div className="container">
        <h2>Videos added by {user?.name}</h2>
        <VideoLlist videos={myVideos} />
      </div>
    </div>
  );
}

export default Profile;

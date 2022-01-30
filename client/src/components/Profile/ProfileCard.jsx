import React from 'react';
import { useAuth } from '../../hooks/auth/useAuth';
import './ProfileCard.css';

function ProfileCard() {
  const { user, setUser } = useAuth();

  const handleLogoutButtonClick = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <div className="container">
      <div className="profile-card">
        <h2>{user?.name}</h2>
        <h3>{user?.profession || ''}</h3>
        <button className="btn" onClick={handleLogoutButtonClick}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;

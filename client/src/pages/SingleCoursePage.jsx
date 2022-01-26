import React from 'react';
import { useParams } from 'react-router-dom';
import VideoLlist from '../components/Videos/VideoLlist';
import { useVideo } from '../hooks/videos/useVideo';
import './styles/SingleCoursePage.css';

// page title from slug
const pageTitle = (slug) => {
  return slug
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// get category from slug
const categoryFromSlug = (slug) => {
  return slug.replace(/-/g, ' ').split(' ')[1];
};

function SingleCoursePage() {
  const { slug } = useParams();
  const { getVideosByCategory } = useVideo();

  return (
    <div className="page single-course-page">
      <div className="container">
        <h1>Videos to {pageTitle(slug)}</h1>
        <VideoLlist videos={getVideosByCategory(categoryFromSlug(slug))} />
      </div>
    </div>
  );
}

export default SingleCoursePage;

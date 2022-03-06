import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './CourseCard.css';

function CourseCard({ course }) {
  const { t } = useTranslation();
  const transKey = `courses.${course.title}`;
  console.log(transKey);

  return (
    <div className="course_card" data-aos="fade-up">
      <div className="card-img">
        <img src={course.icon} alt="" />
      </div>
      <h2>{t(transKey)}</h2>
      <Link to={`/courses/${course.slug}`}>{t('watchVideosText')}</Link>
    </div>
  );
}

export default CourseCard;

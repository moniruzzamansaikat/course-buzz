import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

function CourseCard({ course }) {
  return (
    <div className="course_card" data-aos="fade-up">
      <div className="card-img">
        <img src={course.icon} alt="" />
      </div>
      <h2>{course.title}</h2>
      <Link to={`/courses/${course.slug}`}>watch videos</Link>
    </div>
  );
}

export default CourseCard;

import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

function CourseCard({ course }) {
  return (
    <div className="course_card" data-aos="fade-up">
      <img src={course.icon} alt="" />
      <h2>{course.title}</h2>
      <Link to={`/courses/${course.slug}`}>watch videos</Link>
    </div>
  );
}

export default CourseCard;

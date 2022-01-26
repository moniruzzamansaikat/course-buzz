import React from 'react';
import { useCourse } from '../../hooks/course/useCourse';
import CourseCard from './CourseCard';
import './Courses.css';

function Courses({ limit }) {
  const { categories } = useCourse();

  return (
    <section className="courses">
      <div className="container">
        <h2>Courses</h2>
        <div className="course_items">
          {categories
            .slice(0, limit ? limit + 1 : categories.length + 1)
            .map((course) => {
              return <CourseCard course={course} key={course.slug} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Courses;

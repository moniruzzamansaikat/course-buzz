import React from 'react';
import { useCourse } from '../../hooks/course/useCourse';
import CourseCard from './CourseCard';
import './Courses.css';

function Courses({ limit }) {
  const { categories } = useCourse();

  return (
    <section className="courses" style={{backgroundImage: `url(/img/bg-pattern.jpg)`}}>
      <div className="container">
        <h1 className='section-title'>Courses</h1>
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

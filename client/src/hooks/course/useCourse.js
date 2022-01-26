import { useContext } from 'react';
import { CourseContext } from '../../context/CourseProvider';

export const useCourse = () => useContext(CourseContext);

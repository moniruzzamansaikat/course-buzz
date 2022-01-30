import React from 'react';
import { useCourse } from '../../hooks/course/useCourse';
import DiscussionList from './DiscussionList';
import Filter from './Filter';

function Main() {
  const { categories } = useCourse();

  const options = categories.map((category) => ({
    value: category.tag,
    label: category.tag,
  }));

  return (
    <div>
      <Filter options={options} />
      <DiscussionList />
    </div>
  );
}

export default Main;

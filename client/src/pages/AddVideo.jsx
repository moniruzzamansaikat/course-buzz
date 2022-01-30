import React from 'react';
import Form from '../components/Form/Form';
import { useCourse } from '../hooks/course/useCourse';
import { useLocalStorage } from '../hooks/useLocalstorage';
import { useAuth } from '../hooks/auth/useAuth';
import { useVideo } from '../hooks/videos/useVideo';
import { createNewVideo } from '../adapter/videosAdapter';
import swal from 'sweetalert';

function AddCourse() {
  const [token] = useLocalStorage('token');
  const { categories } = useCourse();
  const { addMyVideo, setFormSubmitting } = useAuth();
  const { addVideo } = useVideo();

  const handler = (data) => {
    createNewVideo(token, data)
      .then((resData) => {
        addVideo(resData);
        addMyVideo(resData);
        setFormSubmitting(false);
        swal('Success', 'Video added successfully', 'success');
      })
      .catch(() => {
        setFormSubmitting(false);
      });
  };

  const inputs = [
    {
      name: 'name',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'url',
      type: 'text',
      label: 'Video URL',
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: categories.map((category) => ({
        value: category.tag,
        label: category.tag,
      })),
    },
  ];

  return (
    <div className="page">
      <div className="container">
        <h1>Add Video</h1>
        <Form inputs={inputs} handler={handler} />
      </div>
    </div>
  );
}

export default AddCourse;

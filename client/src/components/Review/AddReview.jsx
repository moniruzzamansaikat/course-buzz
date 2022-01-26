import React from 'react';
import Form from '../Form/Form';
import { useLocalStorage } from '../../hooks/useLocalstorage';
import './AddReview.css';
import { addReviewById } from '../../adapter/videosAdapter';
import swal from 'sweetalert';

function AddReview({ videoId }) {
  const [token] = useLocalStorage('token');

  const handler = (data) => {
    addReviewById(token, videoId, data.text).then((res) => {
      swal('Success', 'Review added', 'success');
    });
  };

  const inputs = [
    {
      name: 'text',
      label: 'Review',
      type: 'text',
    },
  ];

  return (
    <div className="add-review" id="add-review">
      <h2>Write a review</h2>
      <div className="content">
        <Form inputs={inputs} handler={handler} />
      </div>
    </div>
  );
}

export default AddReview;

import React from 'react';
import { addReply } from '../../adapter/discussAdapter';
import { useAuth } from '../../hooks/auth/useAuth';
import { useLocalStorage } from '../../hooks/useLocalstorage';
import Form from '../Form/Form';
import './AddReply.css';

function AddReply({ discussionId, setQuestion }) {
  const { setFormSubmitting } = useAuth();
  const [token] = useLocalStorage('token');

  const handler = (data) => {
    addReply(token, {
      text: data.text,
      discussionId,
    })
      .then((data) => {
        setQuestion(data);
        setFormSubmitting(false);
      })
      .catch((error) => {
        setFormSubmitting(false);
      });
  };

  const inputs = [
    {
      name: 'text',
      type: 'text',
      label: 'Reply',
    },
  ];

  return (
    <div className="add-reply">
      <h3>Add a reply</h3>
      <Form inputs={inputs} handler={handler} />
    </div>
  );
}

export default AddReply;

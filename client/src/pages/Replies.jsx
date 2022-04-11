import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { fetchQuestionById } from '../adapter/discussAdapter';
import AddReply from '../components/Replies/AddReply';
import RepliesList from '../components/Replies/RepliesList';
import { useLocalStorage } from '../hooks/useLocalstorage';
import './styles/Replies.css';

function Replies() {
  const params = useParams();
  const [question, setQuestion] = useState(null);
  const [token] = useLocalStorage('token');

  useEffect(() => {
    fetchQuestionById(token, params.id)
      .then((data) => {
        setQuestion(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [params.id, token]);

  return (
    <div className="replies-page">
      <Helmet>
        <title>{question?.text}</title>
      </Helmet>
      {question && <h1>{question.text} ?</h1>}
      {question && (
        <p>
          by <strong>{question.user.name}</strong> in{' '}
          <strong>#{question.category}</strong>
        </p>
      )}

      {question && question.length === 0 && <h2>No replies yet !</h2>}
      {question && question.length !== 0 && (
        <RepliesList replies={question.replies} />
      )}

      <AddReply discussionId={params?.id} setQuestion={setQuestion} />
    </div>
  );
}

export default Replies;

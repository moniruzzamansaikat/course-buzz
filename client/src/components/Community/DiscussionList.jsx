import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQuestionsByCategory } from '../../adapter/discussAdapter';
import { useLocalStorage } from '../../hooks/useLocalstorage';
import DiscussionCard from './DiscussionCard';
import './DiscussionList.css';

function DiscussionList() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [discussions, setDiscussions] = useState([]);
  const searchingFor = searchParam.get('key');
  const [token] = useLocalStorage('token');

  useEffect(() => {
    fetchQuestionsByCategory(token, searchingFor)
      .then((data) => {
        console.log(data);
        setDiscussions(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [searchingFor, token, searchParam]);

  return (
    <div className="discussion-list">
      {!discussions.length > 0 && (
        <div className="not-found">
          <h2>
            No discussion found {searchingFor && 'for'} {searchingFor}{' '}
          </h2>
        </div>
      )}

      {discussions.map((discussion) => (
        <DiscussionCard key={discussion._id} discussion={discussion} />
      ))}
    </div>
  );
}

export default DiscussionList;

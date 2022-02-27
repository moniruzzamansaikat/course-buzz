import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQuestionsByCategory } from '../../adapter/discussAdapter';
import { useLocalStorage } from '../../hooks/useLocalstorage';
import Loading from '../Loading/Loading';
import DiscussionCard from './DiscussionCard';
import './DiscussionList.css';

function DiscussionList() {
  const [searchParam] = useSearchParams();
  const [discussions, setDiscussions] = useState([]);
  const searchingFor = searchParam.get('key');
  const [token] = useLocalStorage('token');
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetchQuestionsByCategory(token, searchingFor)
      .then((data) => {
        setDiscussions(data);
        setFetching(false);
      })
      .catch((error) => {
        setFetching(false);
        console.log(error.message || '');
      });
  }, [searchingFor, token, searchParam]);

  return (
    <div className="discussion-list">
      <div className="not-found">
        <h2>
          {fetching ? (
            <Loading fontSize="2rem" />
          ) : discussions.length === 0 ? (
            <p>
              No discussion found {searchingFor && 'for'} {searchingFor}
            </p>
          ) : null}
        </h2>
      </div>

      {!fetching &&
        discussions.map((discussion) => (
          <DiscussionCard key={discussion._id} discussion={discussion} />
        ))}
    </div>
  );
}

export default DiscussionList;

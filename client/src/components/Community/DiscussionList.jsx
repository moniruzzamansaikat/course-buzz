import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQuestionsByCategory } from '../../adapter/discussAdapter';
import { useLocalStorage } from '../../hooks/useLocalstorage';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import DiscussionCard from './DiscussionCard';
import './DiscussionList.css';

function DiscussionList() {
  const [searchParam] = useSearchParams();
  const [discussions, setDiscussions] = useState([]);
  const searchingFor = searchParam.get('key');
  const [token] = useLocalStorage('token');
  const [fetching, setFetching] = useState(true);
  const [page, setPage] = useState(1);
  const [paginateData, setPaginateData] = useState({});

  useEffect(() => {
    fetchQuestionsByCategory(token, searchingFor, page)
      .then((data) => {
        setDiscussions(data.docs);
        const {
          hasNextPage,
          hasPrevPage,
          limit,
          nextPage,
          page,
          prevPage,
          totalPages,
          totalDocs,
        } = data;

        setPage(page);
        setPaginateData({
          hasNextPage,
          hasPrevPage,
          limit,
          nextPage,
          page,
          prevPage,
          totalPages,
          totalDocs,
        });
        setFetching(false);
      })
      .catch((error) => {
        setFetching(false);
      });
  }, [searchingFor, token, searchParam, page]);

  const loadingContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    minWidth: '100%',
  };

  return (
    <div className="discussion-list">
      <div className="not-found">
        <h2>
          {fetching ? (
            <div style={loadingContainerStyle}>
              <Loading fontSize="2rem" />
            </div>
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

      <Pagination {...paginateData} setPage={setPage} />
    </div>
  );
}

export default DiscussionList;

import swal from 'sweetalert';
import { api } from './api';

export const askNewQuestion = (token, { text, category }) => {
  return api('/discuss', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      text,
      category,
    },
  })
    .then((res) => {
      swal('Success', 'Your question has been posted', 'success');
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data, 'error');
      }

      throw error;
    });
};

export const fetchQuestionsByCategory = (token, category, page) => {
  return api(`/discuss?category=${category}&page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data, 'error');
      }

      throw error;
    });
};

export const fetchQuestionById = (token, id) => {
  return api(`/discuss/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data, 'error');
      }

      throw error;
    });
};

export const addReply = (token, { text, discussionId }) => {
  return api('/discuss/reply', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      text,
      discussionId,
    },
  })
    .then((res) => {
      swal('Success', 'Your reply has been posted', 'success');
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data.message, 'error');
      }

      throw error;
    });
};

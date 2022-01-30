import swal from 'sweetalert';
import { api } from './api';

export const fetchAllVideos = (token) => {
  return api('/videos', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data, 'error');
      }
    });
};

export const fetchVideosByUserId = (token, userId) => {
  return api(`/videos/user/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        swal('Error', error.response.data, 'error');
      }
    });
};

export const createNewVideo = (token, { name, url, category }) => {
  return api('/videos', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      name,
      url,
      category,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        swal('Error', error.response.data, 'error');
      }
      throw error;
    });
};

// remove video by id
export const deleteVideoById = (token, videoId) => {
  return api(`/videos/${videoId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error?.response?.data) {
        swal('Error', error.response.data, 'error');
      }
    });
};

// add review
export const addReviewById = (token, videoId, text) => {
  return api(`/videos/${videoId}/reviews`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      text,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error?.response) {
        swal('Error', error.response.data, 'error');
      }

      throw error;
    });
};

// fetch all reviews by video id
export const fetchReviewsByVideoId = (token, videoId) => {
  return api(`/videos/${videoId}/reviews`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error?.response) {
        swal('Error', error.response.data, 'error');
      }
    });
};

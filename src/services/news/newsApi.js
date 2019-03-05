import api from '../api';

import { APP_ID } from '../../config';

const getNews = (limit, offset, token) => api
  .get(
    `applications/${APP_ID}/news/coinpulse`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    null,
    { limit, offset },
  )
  .then(response => ({ response }))
  .catch(error => ({ error }));

export default {
  getNews,
};

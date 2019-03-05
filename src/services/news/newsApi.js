import api from '../api';

import { APP_ID } from '../../config';

const getNews = (limit, offset) => api
  .get(`applications/${APP_ID}/news/coinpulse`, { limit, offset })
  .then(response => ({ response }))
  .catch(error => ({ error }));

export default {
  getNews,
};

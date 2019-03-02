import { encode as btoa } from 'base-64';

import api from '../api';

const CLIENT_ID = '';
const CLIENT_SECRET = '';

const authApi = {
  login: values => api
    .post(
      'oauth/token/',
      {
        ...values,
        grant_type: 'password',
        client_id: CLIENT_ID,
      },
      {
        Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      },
    )
    .then(response => ({ response }))
    .catch(error => ({ error })),
};

export default authApi;

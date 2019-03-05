import qs from 'qs';
import api from '../api';

import { CLIENT_ID } from '../../config';

const login = (email, password) => {
  const data = {
    grant_type: 'password',
    client_id: CLIENT_ID,
    username: email,
    password,
  };

  return api
    .post('oauth/token/', qs.stringify(data))
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

export default {
  login,
};

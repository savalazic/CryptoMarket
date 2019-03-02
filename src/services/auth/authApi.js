import api from '../api';

const CLIENT_ID = '844b0a54-c0af-11e7-abc4-cec278b6b50a';

const authApi = {
  login: (email, password) => {
    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('client_id', CLIENT_ID);
    data.append('username', email);
    data.append('password', password);

    return api
      .post('oauth/token/', data.toString(), {
        'Content-Type': 'application/x-www-form-urlencoded',
      })
      .then(response => ({ response }))
      .catch(error => ({ error }));
  },
};

export default authApi;

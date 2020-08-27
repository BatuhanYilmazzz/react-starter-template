import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.params = {
      'language.slug': localStorage.getItem('i18nextLng'),
    };
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

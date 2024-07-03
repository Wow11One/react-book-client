import axios from 'axios';
import storage, { keys } from '../storage';

axios.interceptors.request.use((params) => {
  const token = storage.getItem(keys.TOKEN);
  if (token) {
    params.headers.setAuthorization(`Bearer ${token}`);
  }
  return params;
});

const addAxiosInterceptors = ({
  onSignOut,
}) => {
  axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (Array.isArray(error.response.data) || error.status === 401) { // there was the error because my backend returns a plain object
        if (error.response.data.some(beError => beError?.code === 'INVALID_TOKEN')
        ) {
          onSignOut();
          if (window.location !== '/login') {
            window.location = '/login';
          }
        }
      }
      throw error.response.data;
    },
  );
};

export {
  addAxiosInterceptors,
};

axios.defaults.withCredentials = true;

export default axios;

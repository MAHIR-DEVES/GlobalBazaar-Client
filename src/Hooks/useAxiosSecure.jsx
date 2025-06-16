import axios from 'axios';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user, userLogout } = use(AuthContext);
  // const token = localStorage.getItem('token');
  const token = user?.accessToken;

  // intercept request
  axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  // intercept response

  axiosInstance.interceptors.response.use(
    res => res,
    err => {
      if (err.status === 401 || err.status === 403) {
        userLogout()
          .then(() => {
            console.log(`you are log out because of ${err.status}`);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;

import axios from 'axios';
import { setLoading, openAlertServer } from 'store/actions/UserInterface';
import store from 'store';

const axiosInstance = (method, path, request) => {
  const url = process.env.REACT_APP_API_HOST + path;

  return axios[method](url, request)
    .then(res => {
      store.dispatch(setLoading(false));

      if (res.status === 200) return res.data;

      return false;
    })
    .catch(error => {
      onError(error);
      return false;
    });
};

export const get = (url, request) => {
  return axiosInstance('get', url, request)
};

export const remove = (url, request) => {
  return axiosInstance('delete', url, request)
};

export const post = (url, request) => {
  return axiosInstance('post', url, request)
};

export const update = (url, request) => {
  return axiosInstance('put', url, request)
};

const onError = error => {
  store.dispatch(setLoading(false));
  store.dispatch(openAlertServer(error?.response?.data?.message));
  console.log(error?.response);
};

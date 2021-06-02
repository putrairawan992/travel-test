import axios from 'axios';
import setAuthToken from 'services/setAuthToken';
import jwtDecode from 'jwt-decode';
import { APP_AUTH_SET_USER } from '../types';

const { REACT_APP_API_HOST, REACT_APP_PREFIX_STORAGE } = process.env;

export const setCurrentUser = decoded => {
  const userData = {
    id: decoded.id_karyawan,
    nama: decoded.nama_karyawan,
    member: decoded.member,
    role: decoded.role,
    photo: decoded.photo_profile
  };

  return {
    type: APP_AUTH_SET_USER,
    payload: Object.keys(decoded).length !== 0 ? userData : {}
  }
};

export const authLogin = userData => dispatch => {
  axios.post(`${REACT_APP_API_HOST}login`, userData)
    .then(res => {
      const token = res.data.data;

      localStorage.setItem(`${REACT_APP_PREFIX_STORAGE}:token`, token);
      setAuthToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));

      return true;
    })
    .catch(err => {
      console.log(err);
    });
};

export const authLogout = () => dispatch => {
  localStorage.removeItem(`${REACT_APP_PREFIX_STORAGE}:token`);
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

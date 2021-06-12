import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';
import axios from 'axios';
import history from '../history';
import { returnErrors } from './errorActions';

export const SignUP = (data) => (dispatch) => {
  axios
    .post('/signup', data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })


    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const SignIN = (data) => (dispatch) => {
  axios
    .post('/signin', data)
    .then((res) => {
      

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      history.push('/home')
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

import {
  URLS_SUCCESS,
  URLS_FAIL
} from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';
export const urlCreate = (data) => (dispatch) => {
  let config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };
  axios
    .post('/createurl', data, config)
    .then((res) => {
      dispatch({
        type: URLS_SUCCESS,
        payload: res.data,
      })


    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'URLS_FAIL')
      );
      dispatch({
        type: URLS_FAIL,
      });
    });
};
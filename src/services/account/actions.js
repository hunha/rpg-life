import { FETCH_CURRENT_ACCOUNT } from './actionTypes';
import axios from 'axios';

export const fetchCurrentAccount = (callback) => dispatch => {
  return axios
    .get("http://localhost:8001/account")
    .then(res => {
      let { account } = res.data;

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_CURRENT_ACCOUNT,
        payload: account
      });
    })
    .catch(err => {
      console.log('Could not fetch current account. Try again later.');
    });
};

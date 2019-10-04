import { FETCH_ACTIVITIES } from './actionTypes';
import axios from 'axios';

export const fetchActivities = (callback) => dispatch => {
  return axios
    .get("http://localhost:8001/activites")
    .then(res => {
      let { activities } = res.data;

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_ACTIVITIES,
        payload: activities
      });
    })
    .catch(err => {
      console.log('Could not fetch activities. Try again later.');
    });
};

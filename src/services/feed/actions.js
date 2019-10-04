import { FETCH_ACTIVITIES } from './actionTypes';

import { productsAPI } from '../util';

export const fetchActivities = (callback) => dispatch => {
  return axios
  .get(productsAPI)
    .then(res => {
      let { activites } = res.data;

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_ACTIVITIES,
        payload: activites
      });
    })
    .catch(err => {
      console.log('Could not fetch activites. Try again later.');
    });
};

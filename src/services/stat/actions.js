import { FETCH_STATS } from './actionTypes';
import axios from 'axios';

export const fetchStats = (callback) => dispatch => {
    return axios
        .get("http://localhost:8001/stats")
        .then(res => {
            let { stats } = res.data;

            if (!!callback) {
                callback();
            }

            return dispatch({
                type: FETCH_STATS,
                payload: stats
            });
        })
        .catch(err => {
            console.log('Could not fetch stats. Try again later.');
        });
};

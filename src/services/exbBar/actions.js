import { FETCH_EXB_BAR } from './actionTypes';
import axios from 'axios';

export const fetchExpBars = (callback) => dispatch => {
    return axios
        .get("http://localhost:8001/exp-bars")
        .then(res => {
            let { expBars } = res.data;

            if (!!callback) {
                callback();
            }

            return dispatch({
                type: FETCH_EXB_BAR,
                payload: expBars
            });
        })
        .catch(err => {
            console.log('Could not fetch exp bars. Try again later.');
        });
};
